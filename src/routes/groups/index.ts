import { Router } from "express"
import { configDotenv } from 'dotenv'
import { config } from "../config/index"

configDotenv();
const app = Router();
var client: any;

app.post('/send-recipe', async (req: any, res: any) => {
    const { url, name, description, link } = req.body;

    try {
        client = client || await config();

        const groups = await client.getAllChatsGroups()
        const filteredGroup = groups.filter((group: any) => group.groupMetadata?.desc?.includes("<recipegroup>"))

        filteredGroup.forEach(async (group: any) => {
            await client.sendImage(
                group.id._serialized,
                url,
                name,
                `*${name.toUpperCase()}*\n\n${description}\n\nconfira a receita em nossa rede social 👉👉 ${link}\n\n_caso o link não esteja disponível, salve esse número de contato, feche e abra o whatsapp novamente! informe-nos se resolveu o problema._`
            ).then((response: any) => {
                res.status(200).json(response)
            }).catch(async (error: any) => {
                console.log(error)
                await client.sendText("553592267960@c.us", "Erro ao enviar receita ao grupo")
            });
        })
    } catch (error) {
        res.status(500).json(error)
    }


})


export default app

