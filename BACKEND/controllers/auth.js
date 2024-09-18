import { db } from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
 


  //CHECK USER IF EXISTS
  const q = "SELECT * FROM usuarios WHERE registro = ?";

  db.query(q, [req.body.registro], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("Usuario ya existente");

    //CREATE A NEW USER
    //Hash the contraseña
    const salt = bcrypt.genSaltSync(10);
    const hashedconstraseña = bcrypt.hashSync(req.body.contraseña, salt);

    const q =
      "INSERT INTO usuarios (`registro`,`nombre`,`apellidos`,`contraseña`,`email`) VALUE (?)";

    const values = [
      req.body.registro,
      req.body.nombre,
      req.body.apellidos,
      hashedconstraseña,
      req.body.email,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Usuario creado con exito!");
    });
  });
};

export const login = (req, res) => {
  const q = "SELECT * FROM usuarios WHERE registro = ?";

  db.query(q, [req.body.registro], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found!");

    const checkPassword = bcrypt.compareSync(
      req.body.contraseña,
      data[0].contraseña
    );

    if (!checkPassword)
      return res.status(400).json("Wrong password or username!");

    const token = jwt.sign({ id: data[0].id }, "secretkey");

    const { contraseña, ...others } = data[0];

    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  });
};

export const logout = (req, res) => {
  res.clearCookie("accessToken",{
    secure:true,
    sameSite:"none"
  }).status(200).json("User has been logged out.")
};