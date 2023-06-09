"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const venom_bot_1 = require("venom-bot");
const dotenv_1 = require("dotenv");
(0, dotenv_1.configDotenv)();
const app = (0, express_1.Router)();
var clientWhatsapp = (0, venom_bot_1.create)({
    session: "tem-sabor-message",
    disableWelcome: true,
});
app.get('/', (req, res) => {
    res.send("/foi");
});
app.post('/send-recipe', async (req, res) => {
    const { url, name, description, link } = req.body;
    const id_group = process.env.ID_GROUPS || "";
    clientWhatsapp.then((client) => {
        client.sendImage(id_group, url, name, `*${name.toUpperCase()}*\n\n${description}\n\nAcesse o link abaixo👇👇\n\n${link}\n\n_caso o link não esteja disponível, salve esse número de contato, feche e abra o whatsapp novamente! informe-nos se resolveu o problema._`).then((response) => {
            res.status(200).json(response);
        }).catch(async (error) => {
            console.log(error);
            await client.sendText("553592267960@c.us", "Erro ao enviar receita ao grupo");
        });
    }).catch(err => console.log(err));
});
exports.default = app;
