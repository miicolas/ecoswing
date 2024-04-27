// authenticateToken middleware
import jwt from "jsonwebtoken";

const authenticateToken = async (req, res, next) => {
  const token = req.cookies.AuthToken; // Récupération du token depuis les cookies

  console.log("token", token);

  if (!token) {
    return res.redirect("http://localhost:5173/login.html"); // Redirection vers la page de connexion si le token est manquant
  }

  console.log("checking token");

  // Vérification du token
  jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
    // Vérification du token avec la clé secrète qui a servi à le créer
    if (err) {
      console.log("token invalide", err);
      return res.redirect("http://localhost:5173/login.html");
    }
    console.log("token valide");
    req.user = decodedToken;
    console.log("decoded token", decodedToken);
    console.log("decoded token user", req.user.id);

    next();
  });
};

export { authenticateToken };
