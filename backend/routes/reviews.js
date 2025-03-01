import express from "express";
import { createView } from "../controllers/reviewController.js";

const router = express.Router();

router.post("/:tourId", createView);

export default router;
