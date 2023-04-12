require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const app = express();
const PORT = 8081;

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    app.listen(PORT, () => {
      console.log(`Server listening on ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.get("/api", (req, res) => {
  res.json({ message: "Hello world" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.post("/api/login", (req, res) => {
  //👇🏻 Accepts the user's credentials
  const { name, password } = req.body;
  //👇🏻 Checks for user(s) with the same email and password
  let result = users.filter(
    (user) => user.name === name && user.password === password
  );

  //👇🏻 If no user exists, it returns an error message
  if (result.length !== 1) {
    return res.json({
      error_message: "Incorrect credentials",
    });
  }
  //👇🏻 Returns the username of the user after a successful login
  res.json({
    message: "Login successfully",
    data: {
      username: result[0].username,
    },
  });
});
