import express from "express";
import cors from "cors";
import router from "./router.js";
import path from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";

const __filename = fileURLToPath(import.meta.url); // Equivalent to __filename in Node.js
const __dirname = path.dirname(__filename); // Equivalent to __dirname in Node.js

const app = express();

const port = 3000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../frontend")));

app.use(router);

app.listen(port, () => {
  console.log(`Serveur : http://localhost:${port}`);
});
