const { Gender } = require("../db");

const generosObtener = async (req, res) => {
  const generos = await Gender.findAll();

  return res.status(200).json(generos);
};

module.exports = { generosObtener };
