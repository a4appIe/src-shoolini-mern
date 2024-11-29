const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateJWT = async (payload) => {
  let token = await jwt.sign(payload, process.env.JWT_SECRET);
  return token;
};

const verifyJWT = async (token) => {
  try {
    let data = await jwt.verify(token, process.env.JWT_SECRET);
    return data;
  } catch (error) {
    return false;
  }
};

const decodeJWT = async (token) => {
  let decoded = await jwt.verify(token);
  return decoded;
};

module.exports = { generateJWT, verifyJWT, decodeJWT };
