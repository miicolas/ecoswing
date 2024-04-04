import express from "express";

import auth from "./routes/authRoutes.js";
import gift from "./routes/giftRoutes.js";



const router = express.Router();

router.use('/auth', auth);
router.use('/gift', gift);


export default router;