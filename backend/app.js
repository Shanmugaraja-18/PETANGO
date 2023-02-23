import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
mongoose
  .connect(
    // "mongodb+srv://Admin:wUJCyXvnRr4KxyDz@cluster0.mqlnxkw.mongodb.net/Pet?retryWrites=true&w=majority"
    "mongodb://Admin:wUJCyXvnRr4KxyDz@ac-ommneur-shard-00-00.mqlnxkw.mongodb.net:27017,ac-ommneur-shard-00-01.mqlnxkw.mongodb.net:27017,ac-ommneur-shard-00-02.mqlnxkw.mongodb.net:27017/Pet?ssl=true&replicaSet=atlas-qk006d-shard-0&authSource=admin&retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(() =>
    console.log("Connected TO Database and Listening TO Localhost 5000")
  )
  .catch((err) => console.log(err));
