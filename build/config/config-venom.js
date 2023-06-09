"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const venom_bot_1 = require("venom-bot");
exports.client = (0, venom_bot_1.create)({
    session: "tem-sabor-message",
    disableWelcome: true,
});
