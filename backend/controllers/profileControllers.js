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
    


    res.status(200).json(
      {
        name: userProfile.name,
        email: userProfile.email,
        gift: userProfile.gift,
        lastGift: userProfile.lastGift,
      },
    );
  } catch (error) {
    console.error("Error getting profile:", error);
  }
};

export { getProfile };
