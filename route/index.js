
import userRoute from "./userRoute.js";
import express from "express";
import ProductRoute from "./productRoute.js"
import ContactRoute from "./contactRoute.js"
import ChatBotRoute from "./ChatBotRoute.js"; 
const route = express.Router();


route.use("/user", userRoute);
route.use("/product", ProductRoute);
route.use("/contact", ContactRoute);

route.use("/chatbot", ChatBotRoute);
export default route;