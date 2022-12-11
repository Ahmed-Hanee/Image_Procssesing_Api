"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image_Main = void 0;
const express_1 = __importDefault(require("express"));
const main_1 = __importDefault(require("../../main"));
const Router_Image = express_1.default.Router();
class Image_Main {
}
exports.Image_Main = Image_Main;
Router_Image.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const validationMessage = yield Image_Validation(req.query);
    if (validationMessage) {
        res.send(validationMessage);
        return;
    }
    let Err = "";
    if (!(yield main_1.default.OutPutDir_Check(req.query))) {
        Err = yield main_1.default.CreateOutput_Dir(req.query);
    }
    if (Err) {
        res.send(Err);
        return;
    }
    const path = yield main_1.default.Image_Get_Path(req.query);
    if (path) {
        res.sendFile(path);
    }
    else {
        res.send("Error While Compiling ?");
    }
}));
const Image_Validation = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const width = parseInt(query.ImageWidth || " ");
    const height = parseInt(query.ImageHeight || "");
    if (!query.ImageWidth && !query.ImageHeight) {
        return null;
    }
    if (Number.isNaN(width) || Number.isNaN(height)) {
        return "Wrong Input In Width And Height Fields.";
    }
    if (width < 1 || height < 1) {
        return "Negative Invalid Interger For Width Or Height Fields.";
    }
    return null;
});
exports.default = Router_Image;
