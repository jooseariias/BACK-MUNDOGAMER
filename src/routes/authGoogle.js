const { Router } = require("express");
const router = Router();
const { User } = require("../db");
const jwt_decode = require("jwt-decode");

router.get("/users", async (req, res) => {
  try {
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (error) {
    console.error("Error while fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { token } = req.body;
    const decodedToken = jwt_decode(token);
    // console.log(decodedToken)
    const { given_name,family_name,picture,email, jti } = decodedToken;
    let user = await User.findOne({ where: { email } });
    if (!user) {
      user = await User.create({
        nombre:given_name,
        apellido:family_name,
        imagen: picture,
        email:email,
        password:jti,
        habilitado:false,
        fechaDeNacimiento:"null",
        pais:"null",
        provincia:"null",
        ciudad:"null",
        calle:"null",
        numero:0,
        departamento:"null",
        codigoPostal:0,
      });
    }

    return res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
