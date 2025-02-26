
import userRoute from "./userRoute.js";
import express from "express";
import ProductRoute from "./productRoute.js"
import ContactRoute from "./contactRoute.js"
import BlogRoute from "./blogRoute.js"
const route = express.Router();


route.use("/user", userRoute);
route.use("/product", ProductRoute);
route.use("/contact", ContactRoute);
route.use("/blog", BlogRoute);
export default route;