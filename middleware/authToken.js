import jwt from "jsonwebtoken";

const authenticateToken = async (req, res, next) => {
  // Récupération du token depuis le cookie ou le header "Authorization"
  const token = req.cookies.AuthToken || req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    // Vérification du token
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decodedToken;
    next();
  } catch (error) {
    console.log("Token invalide", error);
    return res.status(403).json({ error: "Forbidden" });
  }
};

export { authenticateToken };
