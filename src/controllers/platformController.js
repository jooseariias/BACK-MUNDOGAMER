const { Platform } = require("../db");

const plataformasObtener = async (req, res) => {
  const generos = await Platform.findAll();

 
  return res.status(200).json(generos);
};

module.exports = { plataformasObtener };
