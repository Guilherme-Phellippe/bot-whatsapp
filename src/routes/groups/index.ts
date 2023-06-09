import { Router } from "express"
import { Whatsapp } from 'venom-bot'
import { client } from "../../config/config-venom"
import { configDotenv } from 'dotenv'

configDotenv();
const app = Router();

app.get('/', (req: any, res: any) => {
    res.send("ooi")
})

app.post('/send-recipe', async (req: any, res: any) => {
    const { url, name, description, link } = req.body;
    const id_group = process.env.ID_GROUPS || ""

    client.then((client: Whatsapp) => {

        client.sendImage(
            id_group,
            url,
            name,
            `*${name.toUpperCase()}*\n\n${description}\n\nAcesse o link abaixo👇👇\n\n${link}\n\n_caso o link não esteja disponível, salve esse número de contato, feche e abra o whatsapp novamente! informe-nos se resolveu o problema._`
        ).then((response) => {
            res.status(200).json(response)
        }).catch(async (error) => {
            console.log(error)

            await client.sendText("553592267960@c.us", "Erro ao enviar receita ao grupo").catch(error => console.log(error))
        });
    }).catch(err => console.log(err))
})


export default app
