import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getProfile = async (req, res) => {
  const userId = req.user;

  try {
    const userProfile = await prisma.user.findFirst({
      where: {
        id: userId,
      },
      select: {
        name: true,
        email: true,
        gift: true,
        lastGift: true,
      },
    });
    console.log(userProfile);

    res.status(200).json(userProfile);
  } catch (error) {
    console.error("Error getting profile:", error);
  }
};

export { getProfile };
