require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME ,DB_URL} = process.env;

const sequelize = new Sequelize(
  DB_URL,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const {
  Product,
  Order,
  Detail,
  Address,
  Country,
  Gender,
  Platform,
  User,
  Review,
  Buys,
  Favorite,
  Ventas
} = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
Product.belongsToMany(Order, { through: Detail });
Order.belongsToMany(Product, { through: Detail });

Address.belongsTo(Country);
Country.hasOne(Address);

User.belongsTo(Address);
Address.hasOne(User);

Order.belongsTo(User);
User.hasOne(Order);

Review.belongsTo(User);
User.hasMany(Review);

Product.belongsTo(User);
User.hasMany(Product);

Review.belongsTo(Product);
Product.hasMany(Review);

Gender.belongsToMany(Product, { through: "product_gender" });
Product.belongsToMany(Gender, { through: "product_gender" });

Platform.belongsToMany(Product, { through: "product_platform" });
Product.belongsToMany(Platform, { through: "product_platform" });

//realcion carrito
User.belongsToMany(Product, { through: Buys });
Product.belongsToMany(User, { through: Buys });

User.hasMany(Buys);
Product.hasMany(Buys);

Buys.belongsTo(User);
Buys.belongsTo(Product);



//realcion favoritos


User.belongsToMany(Product, { through: Favorite });
Product.belongsToMany(User, { through: Favorite });

User.hasMany(Favorite);
Product.hasMany(Favorite);

Favorite.belongsTo(User);
Favorite.belongsTo(Product);

// Relación entre Venta y Usuario (un usuario puede tener muchas ventas)
User.hasMany(Ventas);
Ventas.belongsTo(User);
// Relación entre Venta y Producto (un producto puede estar en muchas ventas)
Product.belongsToMany(Ventas, { through: 'VentaProducto' });
Ventas.belongsToMany(Product, { through: 'VentaProducto' });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
