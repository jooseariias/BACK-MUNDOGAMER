const { conn, Gender, Platform, Country } = require("../db.js");

const initiateTables = async () => {
  let genders = [
    { genero: "sports" },
    { genero: "adventure" },
    { genero: "horror" },
    { genero: "race" },
    { genero: "rpg" },
    { genero: "multiplayer" },
    { genero: "strategy" },
    { genero: "arcade" },
    { genero: "simulation" },
    { genero: "board games" },
    { genero: "destacados" },
    { genero: "action" },
    { genero: "fight" },
  ];

  for (let index in genders) {
    // console.log(genders[index].gender);
    await Gender.findOrCreate({
      where: {
        genero: genders[index].genero,
      },
    });
  }

  let platforms = [
    {
      nombre: "PS4",
      logo: "https://i.pinimg.com/originals/18/1e/fd/181efd4992e7d117710fff5b82c4ad78.jpg",
    },
    {
      nombre: "PS5",
      logo: "https://images.pushsquare.com/7eb5640f6f42e/ps5-playstation-5-sony-1.large.jpg",
    },
    {
      nombre: "XBOX ONE X",
      logo: "https://news.microsoft.com/wp-content/uploads/prod/sites/41/2017/06/Xbox-One-X_2017_Stacked.png",
    },
    {
      nombre: "PC",
      logo: "https://st4.depositphotos.com/27847728/39420/v/600/depositphotos_394204744-stock-illustration-initial-pc-letter-logo-with.jpg",
    },
    {
      nombre: "NINTENDO SWITCH",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Nintendo_Switch_logo%2C_square.png/768px-Nintendo_Switch_logo%2C_square.png",
    },
    {
      nombre: "NINTENDO WII",
      logo: "https://cdn.mos.cms.futurecdn.net/NmqpY2dduBuVtW5kPzdyyZ.jpg",
    },
  ];

  for (let index in platforms) {
    // console.log(platforms[index].name);
    await Platform.findOrCreate({
      where: {
        nombre: platforms[index].nombre,
        logo: platforms[index].logo,
      },
    });
  }
  let paises = [
    {
      id: 144,
      pais: "Afganistán",
    },
    {
      id: 114,
      pais: "Albania",
    },
    {
      id: 18,
      pais: "Alemania",
    },
    {
      id: 98,
      pais: "Algeria",
    },
    {
      id: 145,
      pais: "Andorra",
    },
    {
      id: 119,
      pais: "Angola",
    },
    {
      id: 4,
      pais: "Anguilla",
    },
    {
      id: 147,
      pais: "Antigua y Barbuda",
    },
    {
      id: 207,
      pais: "Antillas Holandesas",
    },
    {
      id: 91,
      pais: "Arabia Saudita",
    },
    {
      id: 5,
      pais: "Argentina",
    },
    {
      id: 6,
      pais: "Armenia",
    },
    {
      id: 142,
      pais: "Aruba",
    },
    {
      id: 1,
      pais: "Australia",
    },
    {
      id: 2,
      pais: "Austria",
    },
    {
      id: 3,
      pais: "Azerbaiyán",
    },
    {
      id: 80,
      pais: "Bahamas",
    },
    {
      id: 127,
      pais: "Bahrein",
    },
    {
      id: 149,
      pais: "Bangladesh",
    },
    {
      id: 128,
      pais: "Barbados",
    },
    {
      id: 9,
      pais: "Bélgica",
    },
    {
      id: 8,
      pais: "Belice",
    },
    {
      id: 151,
      pais: "Benín",
    },
    {
      id: 10,
      pais: "Bermudas",
    },
    {
      id: 7,
      pais: "Bielorrusia",
    },
    {
      id: 123,
      pais: "Bolivia",
    },
    {
      id: 79,
      pais: "Bosnia y Herzegovina",
    },
    {
      id: 100,
      pais: "Botsuana",
    },
    {
      id: 12,
      pais: "Brasil",
    },
    {
      id: 155,
      pais: "Brunéi",
    },
    {
      id: 11,
      pais: "Bulgaria",
    },
    {
      id: 156,
      pais: "Burkina Faso",
    },
    {
      id: 157,
      pais: "Burundi",
    },
    {
      id: 152,
      pais: "Bután",
    },
    {
      id: 159,
      pais: "Cabo Verde",
    },
    {
      id: 158,
      pais: "Camboya",
    },
    {
      id: 31,
      pais: "Camerún",
    },
    {
      id: 32,
      pais: "Canadá",
    },
    {
      id: 130,
      pais: "Chad",
    },
    {
      id: 81,
      pais: "Chile",
    },
    {
      id: 35,
      pais: "China",
    },
    {
      id: 33,
      pais: "Chipre",
    },
    {
      id: 82,
      pais: "Colombia",
    },
    {
      id: 164,
      pais: "Comores",
    },
    {
      id: 112,
      pais: "Congo (Brazzaville)",
    },
    {
      id: 165,
      pais: "Congo (Kinshasa)",
    },
    {
      id: 166,
      pais: "Cook, Islas",
    },
    {
      id: 84,
      pais: "Corea del Norte",
    },
    {
      id: 69,
      pais: "Corea del Sur",
    },
    {
      id: 168,
      pais: "Costa de Marfil",
    },
    {
      id: 36,
      pais: "Costa Rica",
    },
    {
      id: 71,
      pais: "Croacia",
    },
    {
      id: 113,
      pais: "Cuba",
    },
    {
      id: 22,
      pais: "Dinamarca",
    },
    {
      id: 169,
      pais: "Djibouti, Yibuti",
    },
    {
      id: 103,
      pais: "Ecuador",
    },
    {
      id: 23,
      pais: "Egipto",
    },
    {
      id: 51,
      pais: "El Salvador",
    },
    {
      id: 93,
      pais: "Emiratos Árabes Unidos",
    },
    {
      id: 173,
      pais: "Eritrea",
    },
    {
      id: 52,
      pais: "Eslovaquia",
    },
    {
      id: 53,
      pais: "Eslovenia",
    },
    {
      id: 28,
      pais: "España",
    },
    {
      id: 55,
      pais: "Estados Unidos",
    },
    {
      id: 68,
      pais: "Estonia",
    },
    {
      id: 121,
      pais: "Etiopía",
    },
    {
      id: 175,
      pais: "Feroe, Islas",
    },
    {
      id: 90,
      pais: "Filipinas",
    },
    {
      id: 63,
      pais: "Finlandia",
    },
    {
      id: 176,
      pais: "Fiyi",
    },
    {
      id: 64,
      pais: "Francia",
    },
    {
      id: 180,
      pais: "Gabón",
    },
    {
      id: 181,
      pais: "Gambia",
    },
    {
      id: 21,
      pais: "Georgia",
    },
    {
      id: 105,
      pais: "Ghana",
    },
    {
      id: 143,
      pais: "Gibraltar",
    },
    {
      id: 184,
      pais: "Granada",
    },
    {
      id: 20,
      pais: "Grecia",
    },
    {
      id: 94,
      pais: "Groenlandia",
    },
    {
      id: 17,
      pais: "Guadalupe",
    },
    {
      id: 185,
      pais: "Guatemala",
    },
    {
      id: 186,
      pais: "Guernsey",
    },
    {
      id: 187,
      pais: "Guinea",
    },
    {
      id: 172,
      pais: "Guinea Ecuatorial",
    },
    {
      id: 188,
      pais: "Guinea-Bissau",
    },
    {
      id: 189,
      pais: "Guyana",
    },
    {
      id: 16,
      pais: "Haiti",
    },
    {
      id: 137,
      pais: "Honduras",
    },
    {
      id: 73,
      pais: "Hong Kong",
    },
    {
      id: 14,
      pais: "Hungría",
    },
    {
      id: 25,
      pais: "India",
    },
    {
      id: 74,
      pais: "Indonesia",
    },
    {
      id: 140,
      pais: "Irak",
    },
    {
      id: 26,
      pais: "Irán",
    },
    {
      id: 27,
      pais: "Irlanda",
    },
    {
      id: 215,
      pais: "Isla Pitcairn",
    },
    {
      id: 83,
      pais: "Islandia",
    },
    {
      id: 228,
      pais: "Islas Salomón",
    },
    {
      id: 58,
      pais: "Islas Turcas y Caicos",
    },
    {
      id: 154,
      pais: "Islas Virgenes Británicas",
    },
    {
      id: 24,
      pais: "Israel",
    },
    {
      id: 29,
      pais: "Italia",
    },
    {
      id: 132,
      pais: "Jamaica",
    },
    {
      id: 70,
      pais: "Japón",
    },
    {
      id: 193,
      pais: "Jersey",
    },
    {
      id: 75,
      pais: "Jordania",
    },
    {
      id: 30,
      pais: "Kazajstán",
    },
    {
      id: 97,
      pais: "Kenia",
    },
    {
      id: 34,
      pais: "Kirguistán",
    },
    {
      id: 195,
      pais: "Kiribati",
    },
    {
      id: 37,
      pais: "Kuwait",
    },
    {
      id: 196,
      pais: "Laos",
    },
    {
      id: 197,
      pais: "Lesotho",
    },
    {
      id: 38,
      pais: "Letonia",
    },
    {
      id: 99,
      pais: "Líbano",
    },
    {
      id: 198,
      pais: "Liberia",
    },
    {
      id: 39,
      pais: "Libia",
    },
    {
      id: 126,
      pais: "Liechtenstein",
    },
    {
      id: 40,
      pais: "Lituania",
    },
    {
      id: 41,
      pais: "Luxemburgo",
    },
    {
      id: 85,
      pais: "Macedonia",
    },
    {
      id: 134,
      pais: "Madagascar",
    },
    {
      id: 76,
      pais: "Malasia",
    },
    {
      id: 125,
      pais: "Malawi",
    },
    {
      id: 200,
      pais: "Maldivas",
    },
    {
      id: 133,
      pais: "Malí",
    },
    {
      id: 86,
      pais: "Malta",
    },
    {
      id: 131,
      pais: "Man, Isla de",
    },
    {
      id: 104,
      pais: "Marruecos",
    },
    {
      id: 201,
      pais: "Martinica",
    },
    {
      id: 202,
      pais: "Mauricio",
    },
    {
      id: 108,
      pais: "Mauritania",
    },
    {
      id: 42,
      pais: "México",
    },
    {
      id: 43,
      pais: "Moldavia",
    },
    {
      id: 44,
      pais: "Mónaco",
    },
    {
      id: 139,
      pais: "Mongolia",
    },
    {
      id: 117,
      pais: "Mozambique",
    },
    {
      id: 205,
      pais: "Myanmar",
    },
    {
      id: 102,
      pais: "Namibia",
    },
    {
      id: 206,
      pais: "Nauru",
    },
    {
      id: 107,
      pais: "Nepal",
    },
    {
      id: 209,
      pais: "Nicaragua",
    },
    {
      id: 210,
      pais: "Níger",
    },
    {
      id: 115,
      pais: "Nigeria",
    },
    {
      id: 212,
      pais: "Norfolk Island",
    },
    {
      id: 46,
      pais: "Noruega",
    },
    {
      id: 208,
      pais: "Nueva Caledonia",
    },
    {
      id: 45,
      pais: "Nueva Zelanda",
    },
    {
      id: 213,
      pais: "Omán",
    },
    {
      id: 19,
      pais: "Países Bajos, Holanda",
    },
    {
      id: 87,
      pais: "Pakistán",
    },
    {
      id: 124,
      pais: "Panamá",
    },
    {
      id: 88,
      pais: "Papúa-Nueva Guinea",
    },
    {
      id: 110,
      pais: "Paraguay",
    },
    {
      id: 89,
      pais: "Perú",
    },
    {
      id: 178,
      pais: "Polinesia Francesa",
    },
    {
      id: 47,
      pais: "Polonia",
    },
    {
      id: 48,
      pais: "Portugal",
    },
    {
      id: 246,
      pais: "Puerto Rico",
    },
    {
      id: 216,
      pais: "Qatar",
    },
    {
      id: 13,
      pais: "Reino Unido",
    },
    {
      id: 65,
      pais: "República Checa",
    },
    {
      id: 138,
      pais: "República Dominicana",
    },
    {
      id: 49,
      pais: "Reunión",
    },
    {
      id: 217,
      pais: "Ruanda",
    },
    {
      id: 72,
      pais: "Rumanía",
    },
    {
      id: 50,
      pais: "Rusia",
    },
    {
      id: 242,
      pais: "Sáhara Occidental",
    },
    {
      id: 223,
      pais: "Samoa",
    },
    {
      id: 219,
      pais: "San Cristobal y Nevis",
    },
    {
      id: 224,
      pais: "San Marino",
    },
    {
      id: 221,
      pais: "San Pedro y Miquelón",
    },
    {
      id: 225,
      pais: "San Tomé y Príncipe",
    },
    {
      id: 222,
      pais: "San Vincente y Granadinas",
    },
    {
      id: 218,
      pais: "Santa Elena",
    },
    {
      id: 220,
      pais: "Santa Lucía",
    },
    {
      id: 135,
      pais: "Senegal",
    },
    {
      id: 226,
      pais: "Serbia y Montenegro",
    },
    {
      id: 109,
      pais: "Seychelles",
    },
    {
      id: 227,
      pais: "Sierra Leona",
    },
    {
      id: 77,
      pais: "Singapur",
    },
    {
      id: 106,
      pais: "Siria",
    },
    {
      id: 229,
      pais: "Somalia",
    },
    {
      id: 120,
      pais: "Sri Lanka",
    },
    {
      id: 141,
      pais: "Sudáfrica",
    },
    {
      id: 232,
      pais: "Sudán",
    },
    {
      id: 67,
      pais: "Suecia",
    },
    {
      id: 66,
      pais: "Suiza",
    },
    {
      id: 54,
      pais: "Surinam",
    },
    {
      id: 234,
      pais: "Swazilandia",
    },
    {
      id: 56,
      pais: "Tadjikistan",
    },
    {
      id: 92,
      pais: "Tailandia",
    },
    {
      id: 78,
      pais: "Taiwan",
    },
    {
      id: 101,
      pais: "Tanzania",
    },
    {
      id: 171,
      pais: "Timor Oriental",
    },
    {
      id: 136,
      pais: "Togo",
    },
    {
      id: 235,
      pais: "Tokelau",
    },
    {
      id: 236,
      pais: "Tonga",
    },
    {
      id: 237,
      pais: "Trinidad y Tobago",
    },
    {
      id: 122,
      pais: "Túnez",
    },
    {
      id: 57,
      pais: "Turkmenistan",
    },
    {
      id: 59,
      pais: "Turquía",
    },
    {
      id: 239,
      pais: "Tuvalu",
    },
    {
      id: 62,
      pais: "Ucrania",
    },
    {
      id: 60,
      pais: "Uganda",
    },
    {
      id: 111,
      pais: "Uruguay",
    },
    {
      id: 61,
      pais: "Uzbekistán",
    },
    {
      id: 240,
      pais: "Vanuatu",
    },
    {
      id: 95,
      pais: "Venezuela",
    },
    {
      id: 15,
      pais: "Vietnam",
    },
    {
      id: 241,
      pais: "Wallis y Futuna",
    },
    {
      id: 243,
      pais: "Yemen",
    },
    {
      id: 116,
      pais: "Zambia",
    },
    {
      id: 96,
      pais: "Zimbabwe",
    },
  ];

  for (let index in paises) {
    // console.log(paises[index].pais);
    await Country.findOrCreate({
      where: {
        pais: paises[index].pais,
      },
    });
  }
};

module.exports = { initiateTables };
