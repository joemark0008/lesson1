import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createNewUser = async (payload) => {

  const newUser = await prisma.user.create({
    data: {
      name: payload.name,
    },
  });

  return newUser;
};

export const findAllUser = async () => {
  return await prisma.user.findMany();
};
