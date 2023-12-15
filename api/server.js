import express from "express";
import { connectDB } from "./db/connectDB.js";
import userRoute from "./router/userRoutes.js";
import cors from 'cors';

const app = express();
connectDB();

app.use(express.json());
app.use(cors())


app.get("/", function (req, res) {
  res.send("Hello World");
});

app.use("/api", userRoute);

app.listen(8080, () => {
  console.log("server is running on port 8080");
});
