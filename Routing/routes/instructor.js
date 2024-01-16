import express from "express";
import {
  allInstructor,
  deleteInstructor,
} from "../controller/instructorController.js";
const router = express.Router();

// router.get("/instructor/all", (rea, res) => {
//   res.send("<h1>All instructors </h1>");
// });
router.get("/instructor/all", allInstructor);
router.get("/instructor/delete/:id([0-9]{1,2})", deleteInstructor);
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
