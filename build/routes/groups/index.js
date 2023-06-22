"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dotenv_1 = require("dotenv");
const index_1 = require("../config/index");
(0, dotenv_1.configDotenv)();
const app = (0, express_1.Router)();
var client;
app.post('/send-recipe', async (req, res) => {
    const { url, name, description, link } = req.body;
    try {
        client = client || await (0, index_1.config)();
        const groups = await client.getAllChatsGroups();
        const filteredGroup = groups.filter((group) => group.groupMetadata?.desc?.includes("<recipegroup>"));
        filteredGroup.forEach(async (group) => {
            await client.sendImage(group.id._serialized, url, name, `*${name.toUpperCase()}*\n\n${description}\n\nconfira a receita em nossa rede social 👉👉 ${link}\n\n_caso o link não esteja disponível, salve esse número de contato, feche e abra o whatsapp novamente! informe-nos se resolveu o problema._`).then((response) => {
                res.status(200).json(response);
            }).catch(async (error) => {
                console.log(error);
                await client.sendText("553592267960@c.us", "Erro ao enviar receita ao grupo");
            });
        });
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.default = app;
