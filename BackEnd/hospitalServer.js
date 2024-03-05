const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

var user = [
  {
    names: "sushant",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.use(express.json());

app.get("/", (req, res) => {
  const userKidney = user[0].kidneys;
  const numOfKid = userKidney.length;

  let numOfHeathyKid = 0;

  for (let i = 0; i < userKidney.length; i++) {
    if (userKidney[i].healthy) {
      numOfHeathyKid = numOfHeathyKid + 1;
    }
  }
  const numberOfUnhealthykid = numOfKid - numOfHeathyKid;

  res.json({
    numOfKid,
    numOfHeathyKid,
    numberOfUnhealthykid,
  });
});

app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  user[0].kidneys.push[
    {
      healthy: isHealthy,
    }
  ];

  res.json({
    msg: "Done",
  });
});

app.put("/", (req, res) => {
  for (let i = 0; i < user[0].kidneys.length; i++) {
    user[0].kidneys[i].healthy = true;
  }

  res.json({});
});

app.delete("/", (req, res) => {
  if (isThereAtleastOneUnhealthyKidney) {
    const newKidneys = [];

    for (let i = 0; i < user[0].kidneys.length; i++) {
      if (user[0].kidneys[i].healthy.healthy) {
        newKidneys.push({
          healthy: true,
        });
      }
    }
    user[0].kidneys = newKidneys;
    res.json({ message: "Done" });
  } else {
    res.status(411).json({
      message: "You have no bad kidney",
    });
  }
});

const isThereAtleastOneUnhealthyKidney = () => {
  let atleastOneUnhealthyKidney = false;
  for (let i = 0; i < user[0].kidneys.length; i++) {
    if (!user[0].kidneys[i].healthy) {
      atleastOneUnhealthyKidney = true;
    }
  }
  return atleastOneUnhealthyKidney;
};
app.listen(port, () => {
  console.log(`server isrunning on port number: ${port}`);
});
