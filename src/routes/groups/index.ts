import { Router } from "express"
import { Whatsapp, create } from 'venom-bot'
import { configDotenv } from 'dotenv'

configDotenv();
const app = Router();

const createClientWhatsapp = async (): Promise<Whatsapp> => {
    return create({
        session: "tem-sabor-message",
        disableWelcome: true,
        headless: 'new'
    });
};


app.post('/send-recipe', async (req: any, res: any) => {
    const { url, name, description, link } = req.body;
    const id_group = process.env.ID_GROUPS || ""

    try {
        const client: Whatsapp = await createClientWhatsapp();

        await client.sendImage(
            id_group,
            url,
            name,
            `*${name.toUpperCase()}*\n\n${description}\n\nAcesse o link abaixo👇👇\n\n${link}\n\n_caso o link não esteja disponível, salve esse número de contato, feche e abra o whatsapp novamente! informe-nos se resolveu o problema._`
        ).then((response) => {
            res.status(200).json(response)
        }).catch(async (error) => {
            console.log(error)
            await client.sendText("553592267960@c.us", "Erro ao enviar receita ao grupo")
        });
    } catch (error) {
        res.status(500).json(error)
    }
})


export default app

