import express from "express";
import { createNewUser, findAllUser } from "../service/user.js";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const userRouter = express.Router();
//get
userRouter.get("/user", async (_, res) => {
  const getUser = await findAllUser()
  return res.json(getUser);
});

//post
userRouter.post("/user", async (req, res) => {
  const newUser = await createNewUser(req.body);
  return res.json(newUser);
});

export default userRouter;
