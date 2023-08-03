const express = require("express");
const userRouter = require("./routes/user");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended : true}));

app.listen(3300, () => {
  console.log(`server is successfully listening in 3300`);
});

//home page
app.get("/", (req, res) => {
  res.send('Welcome to home page');
});

app.use(userRouter);
