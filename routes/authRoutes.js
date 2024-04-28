import express from "express";
import { signup, login, logout } from "../controllers/authControllers.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);
router.get('/data', authenticateToken, (req, res) => {
    // Route protégée
    res.json({ message: 'Données sécurisées accessibles !', user: req.user });
});


export default router;
