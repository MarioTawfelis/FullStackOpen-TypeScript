"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3003;
app.get('api/ping', (_req, res) => {
    res.send('Pong');
});
app.listen(PORT, () => {
    console.log(`Backend is listening on port ${PORT}`);
});
