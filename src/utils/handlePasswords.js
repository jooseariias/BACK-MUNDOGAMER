const bcryptjs = require("bcryptjs");

const encrypt = async (passwordPlain) => {
  const hash = await bcryptjs.hash(passwordPlain, 10);
  return hash;
};

const compare = async (passwordPlain, hassPassword) => {
  return await bcryptjs.compare(passwordPlain, hassPassword);
};

module.exports = { encrypt, compare };
