
import userRoute from "./userRoute.js";
import express from "express";
import ProductRoute from "./productRoute.js"
import ContactRoute from "./contactRoute.js"
const route = express.Router();

route.use("/user", userRoute);
route.use("/product", ProductRoute);
route.use("/contact", ContactRoute);
export default route;