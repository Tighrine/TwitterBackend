import express from "express";
import { userRouter, tweetRouter } from "./routes";


const app = express();
app.use(express.json());

app.use("/user", userRouter);
app.use("tweet", tweetRouter);

app.listen(3000, () => {
    console.log("Server is running !!");
});