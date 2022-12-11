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
exports.Image_File = void 0;
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const Image_Src_1 = __importDefault(require("./Image_Src"));
class Image_File {
}
exports.Image_File = Image_File;
class File {
    static CreateOutputDir_Path() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield fs_1.promises.access(File.OutPutFolder);
            }
            catch (_a) {
                fs_1.promises.mkdir(File.OutPutFolder);
            }
        });
    }
    static CreateOutput_Dir(params) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!params.ImageName || !params.ImageWidth || !params.ImageHeight) {
                return null;
            }
            const filePathFull = path_1.default.resolve(File.InputFolder, `${params.ImageName}.jpg`);
            const filePathThumb = path_1.default.resolve(File.OutPutFolder, `${params.ImageName}-${params.ImageWidth}x${params.ImageHeight}.jpg`);
            return yield (0, Image_Src_1.default)({
                Input_Dir: filePathFull,
                OutPut_Dir: filePathThumb,
                Nwidth: parseInt(params.ImageWidth),
                Nheight: parseInt(params.ImageHeight),
            });
        });
    }
    static Image_Get_Path(params) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!params.ImageName) {
                return null;
            }
            const FileP = params.ImageWidth && params.ImageHeight
                ? path_1.default.resolve(File.OutPutFolder, `${params.ImageName}-${params.ImageWidth}x${params.ImageHeight}.jpg`)
                : path_1.default.resolve(File.InputFolder, `${params.ImageName}.jpg`);
            try {
                yield fs_1.promises.access(FileP);
                return FileP;
            }
            catch (_a) {
                return null;
            }
        });
    }
    static OutPutDir_Check(params) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!params.ImageName || !params.ImageWidth || !params.ImageHeight) {
                return false;
            }
            const FileP = path_1.default.resolve(File.OutPutFolder, `${params.ImageName}-${params.ImageWidth}x${params.ImageHeight}.jpg`);
            try {
                yield fs_1.promises.access(FileP);
                console.log(` ${FileP}`);
                return true;
            }
            catch (_a) {
                return false;
            }
        });
    }
}
exports.default = File;
File.InputFolder = path_1.default.resolve(__dirname, "./../Udacity_Images/images/Original_Images");
File.OutPutFolder = path_1.default.resolve(__dirname, "./../Udacity_Images/images/New_Images");
