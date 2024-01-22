import express from "express";
const router = express.Router();

// OUR FAKE USERS
const users = [
  {
    id: 1,
    name: "jack",
    age: 23,
  },
  {
    id: 2,
    name: "steve",
    age: 26,
  },
  {
    id: 3,
    name: "robert",
    age: 24,
  },
];

router.get("/", (req, res) => {
  res.json(users);
});

router.get("/:id", (req, res) => {
  const result = users.filter((user) => {
    return user.id == req.params.id;
  });
  console.log(result);
  res.json(result);
});
router.post("/add/:id/:name", (req, res) => {
  res.send(`Name:-${req.params.name} Id:-${req.params.id} created`);
});
router.put("/update/:id/:name", (req, res) => {
  res.send(`Name:- ${req.params.name} id:- ${req.params.id} Update`);
});
router.delete("/delete/:id([0-9]{1,2})", (req, res) => {
  const { id } = req.params;
  if (id <= 10) {
    res.send(`can not delete the user by this id:-${req.params.id} `);
  }
  else{
  res.send(`id:-${req.params.id} user Delete`);
  }
});

export default router;
