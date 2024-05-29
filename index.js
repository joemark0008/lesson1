import express from "express";
import userRouter from "./routes/user.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use(userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
