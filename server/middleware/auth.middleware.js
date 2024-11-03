require("dotenv").config();
const jwt = require("jsonwebtoken");
const { prisma } = require("../prisma/prisma-client");


const auth = async (req, res, next) => {
  try {
    let token = req.headers.authorization?.split(" ")[1];
        
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await prisma.user.findUnique({
      where: {
        id: decoded.id,
      },
      include: {
        createdEmployee: true,
      },
    });
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "no authorization" });
  }
};

module.exports = auth;
