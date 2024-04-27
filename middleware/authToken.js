// authenticateToken middleware
import jwt from "jsonwebtoken";

const authenticateToken = async (req, res, next) => {
  const token = req.cookies.AuthToken; // Récupération du token depuis les cookies

  if (!token) {
    return res.redirect("http://192.168.1.166:3000/login.html"); // Redirection vers la page de connexion si le token est manquant
  }

  // Vérification du token
  jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
    // Vérification du token avec la clé secrète qui a servi à le créer
    if (err) {
      console.log("token invalide", err);
      return res.redirect("http://192.168.1.166:3000/login.html");
    }
    req.user = decodedToken;
    console.log("decoded token", decodedToken);
    console.log("decoded token user", req.user.id);
    next();
  });
};

export { authenticateToken };
