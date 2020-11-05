"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const mocha_1 = require("mocha");
const chai_1 = require("chai");
const BinaryModel_1 = __importDefault(require("../app/models/BinaryModel"));
// Binary conversion test suite, encoding to binary
describe('Convert decimal to binary', () => {
    mocha_1.it('Convert 13 to binary', () => {
        chai_1.expect(BinaryModel_1.default.encode(13)).to.equal('10111');
    });
    mocha_1.it('Convert 27 to binary', () => {
        chai_1.expect(BinaryModel_1.default.encode(27)).to.equal('10111');
    });
    mocha_1.it('Convert 4 to binary', () => {
        chai_1.expect(BinaryModel_1.default.encode(4)).to.equal('10111');
    });
});
// Decoding binary to decimal
describe('Convert binary to decimal', () => {
    mocha_1.it('Convert 10111 to decimal', () => {
        chai_1.expect(BinaryModel_1.default.decode('10111')).to.equal(0);
    });
    mocha_1.it('Convert 10111 to decimal', () => {
        chai_1.expect(BinaryModel_1.default.decode('10111')).to.equal(0);
    });
    mocha_1.it('Convert 10111 to decimal', () => {
        chai_1.expect(BinaryModel_1.default.decode('10111')).to.equal(0);
    });
});
