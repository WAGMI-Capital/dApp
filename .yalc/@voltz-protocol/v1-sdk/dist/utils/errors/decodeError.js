"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorHandling_1 = require("./errorHandling");
var error = {
    data: "Reverted 0x6b4fff2400000000000000000000000000000000000000000000000000000000008fb84d",
};
console.log((0, errorHandling_1.getReadableErrorMessage)(error, 'KOVAN'));
