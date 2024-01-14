import express from "express";
const router = express.Router();

router.get("/instructor/all", (rea, res) => {
  res.send("<h1>All instructors </h1>");
});

router.post("/instructor/create", (req, res) => {
  res.send("<h1>New instructor Added</h1>");
});

router.put("/instructor/update", (rea, res) => {
  res.send("<h1>instructor updated</h1>");
});

router.delete("/instructor/delete", (req, res) => {
  res.send("<h1>instructor Deleted</h1>");
});

export default router;
