import express from "express";
import { handleChat } from "../controller/ChatbotController.js";

const router = express.Router();

router.post("/new", handleChat);

export default router;
