import express from "express";

import auth from "./routes/authRoutes.js";
import gift from "./routes/giftRoutes.js";
import dashboard from "./routes/dashboardRoutes.js";

const router = express.Router();

router.use("/auth", auth);
router.use("/gift", gift);
router.use("/dashboard", dashboard);


export default router;
