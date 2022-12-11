import express from "express";
import Router_Image from "./Routes_Api/Images_R_Api";

const Main_Route: express.Router = express.Router();

Main_Route.use("/api/images", Router_Image);

Main_Route.get("/", (req, res): void => {
  res.send("Welcome To HomePage");
});

export default Main_Route;
