import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getProfile = async (req, res) => {
  const userId = req.user.id;

  try {
    const userProfile = await prisma.user.findFirst({
      where: {
        id: userId,
      },
      select: {
        id: true,
        name: true,
        email: true,
        gift: true,
        lastGift: true,
      },
    });

    res.status(200).json({message: "Profile retrieved successfully"}
      
    );
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { getProfile };
