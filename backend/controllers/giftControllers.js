import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const addGift = async (req, res) => {
  const userId = req.user;
  console.log(userId);

  try {
    const userLastGift = await prisma.user.findFirst({
      where: {
        id: userId,
      },
      select: {
        lastGift: true,
      },
    });
    console.log(userLastGift);

    if (userLastGift.lastGift) {
      const lastGift = new Date(userLastGift.lastGift);
      const now = new Date();
      const diff = now.getTime() - lastGift.getTime();
      const diffDays = diff / (1000 * 3600 * 24);
      console.log(diffDays);

      if (diffDays < 1) {
        return res.status(400).json({ error: "You can only gift once a day" });
      }
    }

    const updatedtGift = await prisma.user.update({
      where: {
        id: userId, // Utiliser l'ID converti en entier
      },
      data: {
        gift: {
          increment: 1,
        },
      },
    });
    console.log(updatedtGift);

    const upadtedLastGift = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        lastGift: new Date(),
      },
    });
    console.log(upadtedLastGift);

    next();
  } catch (error) {
    console.error("Error adding gift:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export { addGift };
