import express from "express";
import { homeController } from "../controller/homeController.js";
import { contactcontroller } from "../controller/contactController.js";
import { aboutcontroller } from "../controller/aboutController.js";
const router = express.Router();

router.get("/", homeController);
router.get("/contact", contactcontroller);
router.get("/about", aboutcontroller);

export default router;
