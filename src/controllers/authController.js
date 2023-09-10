const { matchedData } = require("express-validator");
const { User } = require("../db");
const { encrypt, compare } = require("../utils/handlePasswords");
const { tokenSign } = require("../utils/handleJwt");
const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const usuario = await User.findOne({
      where: {
        email,
      },
    });

    if (!usuario) {
      return res.status(404).json({ mensaje: "Usuario no registrado" });
    }

    if (!usuario.habilitado) {
      return res.status(400).json({ mensaje: "Usuario baneado" });
    }

    // Verificar la contraseña
    const passwordMatch = await compare(password, usuario.password);

    if (!passwordMatch) {
      return res.status(401).json({ mensaje: "Contraseña incorrecta" });
    }

    const data = {
      token: await tokenSign(usuario), // Generar un token de autenticación
      usuario,
    };

    const expirationTime = 24 * 60 * 60 * 1000; // 24 horas en milisegundos

    res.cookie("sessionLocal", data.token, {
      expires: new Date(Date.now() + expirationTime),
      httpOnly: true,
    });

    res.status(200).json(data);
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    res.status(403).json({ error: error.message });
  }
};


const userRegister = async (req, res) => {
  try {
    const {
      nombre,
      apellido,
      email,
      password, // Cambiar de contraseña a password
      fotoDePerfil,
      fechaDeNacimiento,
      pais,
      provincia,
      ciudad,
      calle,
      numero,
      departamento,
      codigoPostal,
    } = req.body;

    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (user) {
      return res
        .status(409)
        .json({ error: "El usuario ya existe en la base de datos" });
    }

    // Encriptar la contraseña (asegúrate de que la función "encrypt" esté definida y funcione correctamente)
    const contraseñaEncriptada = await encrypt(password);

    // Crear el usuario con los datos proporcionados
    const dataUser = await User.create({
      nombre,
      apellido,
      email,
      password: contraseñaEncriptada, // Usar la contraseña encriptada
      rol: "user",
      habilitado: true,
      fotoDePerfil,
      fechaDeNacimiento,
      pais,
      provincia,
      ciudad,
      calle,
      numero,
      departamento,
      codigoPostal,
    });

    res.status(201).json({ mensaje: "Usuario registrado exitosamente" });
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    res.status(500).json({ error: "Ocurrió un error al registrar el usuario" });
  }
};


module.exports = { userLogin, userRegister };
