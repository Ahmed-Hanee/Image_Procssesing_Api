"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Images_R_Api_1 = __importDefault(require("./Routes_Api/Images_R_Api"));
const Main_Route = express_1.default.Router();
Main_Route.use("/api/images", Images_R_Api_1.default);
Main_Route.get("/", (req, res) => {
    res.send("Welcome To HomePage");
});
exports.default = Main_Route;
