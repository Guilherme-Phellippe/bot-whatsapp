"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dotenv_1 = require("dotenv");
(0, dotenv_1.configDotenv)();
const app = (0, express_1.Router)();
app.get('/', (req, res) => {
    res.send("ooi");
});
app.post('/send-recipe', async (req, res) => {
    console.log(req.body);
    res.send(req.body);
    // const { url, name, description, link } = req.body;
    // const id_group = process.env.ID_GROUPS || ""
    // client.then((client: Whatsapp) => {
    //     client.sendImage(
    //         id_group,
    //         url,
    //         name,
    //         `*${name.toUpperCase()}*\n\n${description}\n\nAcesse o link abaixo👇👇\n\n${link}\n\n_caso o link não esteja disponível, salve esse número de contato, feche e abra o whatsapp novamente! informe-nos se resolveu o problema._`
    //     ).then((response) => {
    //         res.status(200).json(response)
    //     }).catch((error) => console.log(error));
    // })
});
exports.default = app;
