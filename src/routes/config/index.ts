import { create } from 'venom-bot';

export async function config() {
    const response = await create({
        session: "bot-whatsapp",
    })


    return response
}