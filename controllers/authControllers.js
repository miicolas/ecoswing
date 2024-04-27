import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

const signup = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const confirmEmail = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (confirmEmail) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email: email,
        name: name,
        password: hashPassword,
      },
    });

    res.status(200).redirect("http://localhost:5173/login.html");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  try {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    console.log(passwordMatch);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Si tout est bon, générer un token JWT ou gérer la session de l'utilisateur
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      },
    );

    res.cookie("AuthToken", token, {
      // Crée un cookie avec le token
      httpOnly: true,
      secure: false,
      sameSite: "strict",
    });

    res.status(200).redirect("/dashboard");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const logout = async (req, res) => {
  try {
    res.clearCookie("AuthToken");
    res.status(200).redirect("/index.html");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { signup, login, logout };
