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
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index"));
const request = (0, supertest_1.default)(index_1.default);
describe("Endpoint Testing", () => {
    it("HomePage", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get("/");
        expect(response.status).toEqual(200);
    }));
    it("No Arguments Is Added ", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get("/api/images");
        expect(response.status).toEqual(200);
    }));
    it("Displaying Main Images With No Errors ", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get("/api/images?filename=santamonica");
        expect(response.status).toBe(200);
    }));
    it("Displaying New Image After Applying Sharp Resizing", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get("/api/images?filename=santamonica&width=199&height=199");
        expect(response.status).toEqual(200);
    }));
    it("Width Have -Ve Value ", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get("/api/images?filename=santamonica&width=-200&height=200");
        expect(response.status).toEqual(200);
    }));
});
