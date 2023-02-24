const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const POST = process.env.POST || 4000;
const cors = require("cors");
const mongoose = require("mongoose");
const authRouter = require("./routes/authRoute")

app.use("/", (req, res)=> {
    res.send("hello i am hai");
})

app.use('api/user', authRouter)



mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });

app.listen(POST, () => {
    console.log(`Server running at post ${POST}`);
});
