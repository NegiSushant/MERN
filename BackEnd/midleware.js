const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//without middleware function
function isOldEnough(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

//middleware function
const isOldEnoughMiddleware = (req, res, next) => {
  if (age >= 14) {
    next();
  } else {
    res.json({ msg: "Sorry you are not of age yet" });
  }
};

//without middleware function
app.get("/ride1", (req, res) => {
  if (isOldEnough(req.query.age)) {
    res.json({
      mes: "You have successfully riden the ride1",
    });
  } else {
    res.status(411).json({
      msg: "Sorry you are not of age yet",
    });
  }
});

app.get("/ride2", (req, res) => {
  if (isOldEnough(req.query.age)) {
    res.json({
      mes: "You have successfully riden the ride2",
    });
  } else {
    res.status(411).json({
      msg: "Sorry you are not of age yet",
    });
  }
});

//using middleware function
app.get("/ride", isOldEnoughMiddleware, (req, res) => {
  res.json({
    mes: "You have successfully riden the ride2",
  });
});

app.listen(port, () => {
  console.log(`Server running at port number: ${port}`);
});
