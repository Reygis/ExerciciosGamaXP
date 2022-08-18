"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = __importDefault(require("./lib"));
describe("somando um monte de somas", () => {
    test('adds 1 + 2 to equal 3', () => {
        expect((0, lib_1.default)(1, 2)).toBe(3);
    });
    test("soma de soma", () => {
        expect((0, lib_1.default)((0, lib_1.default)(1, 2), 3)).toBe(5);
    });
    test("soma de soma de soma", () => {
        expect((0, lib_1.default)((0, lib_1.default)(1, 2), (0, lib_1.default)(3, 4))).toBe(10);
    });
});
