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
const main_1 = __importDefault(require("../main"));
it("FileName Is Incorrect ", () => __awaiter(void 0, void 0, void 0, function* () {
    const Err = yield main_1.default.CreateOutput_Dir({
        ImageName: "encenadaports",
        ImageWidth: "507",
        ImageHeight: "910",
    });
    expect(Err).not.toBeNull();
}));
/************************************************************************************************* */
describe("Sharp Building", () => {
    it("Width Input Value Is Unvalid", () => __awaiter(void 0, void 0, void 0, function* () {
        const Err = yield main_1.default.CreateOutput_Dir({
            ImageName: "encenadaport",
            ImageWidth: "-450",
            ImageHeight: "689",
        });
        expect(Err).not.toEqual(null);
    }));
});
