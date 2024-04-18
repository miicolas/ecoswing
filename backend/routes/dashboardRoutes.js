import express from "express";
import { authenticateToken } from "../middleware/authToken.js";
import { getProfile } from "../controllers/profileControllers.js";

const router = express.Router();

router.post("/", authenticateToken, getProfile);

export default router;
