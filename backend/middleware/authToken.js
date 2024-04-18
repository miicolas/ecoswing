// authenticateToken middleware
import jwt from "jsonwebtoken";

const authenticateToken = async (req, res, next) => {
  const token = req.cookies.AuthToken; // Récupération du token depuis les cookies

  if (!token) {
    return res.redirect("/index.html"); // Redirection vers la page de connexion si le token est manquant
  }

  // Vérification du token
  jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
    // Vérification du token avec la clé secrète qui a servi à le créer
    if (err) {
      console.log("token invalide", err);
      return res.redirect("/index.html");
    }
    req.user = decodedToken.user;
    next();
  });
};

export { authenticateToken };
