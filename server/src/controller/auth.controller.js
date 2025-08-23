const userModel = require("../models/auth.model");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs')

async function registerController(req, res) {
  const { username, password } = req.body;

  const isUserExist = await userModel.findOne({
    username,
  });
  if (isUserExist) {
    return res.status(409).json({
      message: "User is already exist",
    });
  }
  const user = await userModel.create({
    username,
    password: await bcrypt.hash(password, 10),
  });

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET
  );

  res.cookie("token", token);

  res.status(201).json({
    message: "User created successfully",
    user,
  });
}

async function loginController(req, res) {
  const { username, password } = req.body;

  const user = await userModel.findOne({
    username: username,
  });

  if (!user) {
    return res.status(401).json({
      message: "User not found",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET
  );

  res.cookie("token", token);

  const isPassMatch = await bcrypt.compare(password, user.password);

  if (!isPassMatch) {
    return res.status(401).json({
      message: "Invalid password",
    });
  }

  res.status(201).json({
    message: "User Logged in successfully",
    user,
  });
}

module.exports = {
  registerController,
  loginController,
};
