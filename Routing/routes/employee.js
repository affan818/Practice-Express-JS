import express from "express";
const router = express.Router();

router.get("/employee/all", (rea, res) => {
  res.send("<h1>All Employees </h1>");
});

router.post("/employee/create", (req, res) => {
  res.send("<h1>New Employee Added</h1>");
});

router.put("/employee/update", (rea, res) => {
  res.send("<h1>Employee updated</h1>");
});

router.delete("/employee/delete", (req, res) => {
  res.send("<h1>Employee Deleted</h1>");
});

export default router;
