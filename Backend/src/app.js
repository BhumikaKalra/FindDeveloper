const express = require('express');
const connectdb = require("../Config/Database");
const User = require("../model/user");

const app = express();
const PORT = 3000;


app.use(express.json());

app.post("/signup",  async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    return res.status(201).send("User added successfully");
  } catch (err) {
    console.error("Signup failed", err);
    return res.status(500).send("Error occurred while creating user");
  }
});


//API to get all users , feed API 

const startServer = async () => {
  try {
    app.listen(PORT, () => {
      console.log("server is successfully listening to " + PORT);
    });
    await connectdb();
    console.log("Database connected successfully");
  } catch (err) {
    console.error("Database connection failed", err);
    process.exitCode = 1;
  }
};

startServer();