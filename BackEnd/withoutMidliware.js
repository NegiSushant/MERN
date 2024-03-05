const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/health-checkup", (req, res) => {
  const userName = req.query.userName;
  const password = req.query.password;
  const kidneyid = req.query.kidneyid;

  if (userName != "john" || password != "pass") {
    res.status(400).json({ mes: "Something up with your inputs" });
    return;
  }

  if (kidneyid != 1 && kidneyid != 2) {
    res.status(400).json({ mess: "Something up with your inputs" });
    return;
  }

  res.json({
    mess: "Your kidney is fine",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port number: ${port}`);
});
