const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World! How are you?");
});

// create array of objects
const users = [
  {
    id: 1,
    name: "Abdul Alim",
    email: "abdulalim@gmail.com",
    phone: "01788888888",
  },
  {
    id: 2,
    name: "Abdul Kader",
    email: "abdulkader@gmail.com",
    phone: "01733333333",
  },
  {
    id: 3,
    name: "Baker Vai",
    email: "Bakervai@gmail.com",
    phone: "01744444444",
  },
  {
    id: 4,
    name: "Mosaddek Hossain",
    email: "mosaddekhossain@gmail.com",
    phone: "01755555555",
  },
  {
    id: 5,
    name: "Maruf Khan",
    email: "marufkhan@gmail.com",
    phone: "01766666666",
  },
  {
    id: 6,
    name: "Mamun Mia",
    email: "mamunmia@gmail.com",
    phone: "01722222222",
  },
];

app.get("/users", (req, res) => {
    //filter by search query parameter
  if (req.query.name) {
    const search = req.query.name.toLowerCase();
    const matched = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(matched);
  } else {
    res.send(users);
  }
});

app.get("/user/:id", (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  res.send(user);
});

app.post("/user", (req, res) => {
  console.log("request", req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

app.get("/fruits", (req, res) => {
  res.send(["mango", "apple", "oranges"]);
});

app.get("/fruits/mango/fazle", (req, res) => {
  res.send("sour sour fazle flavour");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
