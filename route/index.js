
import userRoute from "./userRoute.js";
import express from "express";
import ProductRoute from "./productRoute.js"
const route = express.Router();

route.use("/user", userRoute);
route.use("/product", ProductRoute);
export default route;