import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getProfile = async (req, res) => {
  const userId = req.user.id;

  try {
    
    res.status(200).json(
      {
        message: "Profile fetched successfully",
      },
    );
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { getProfile };
