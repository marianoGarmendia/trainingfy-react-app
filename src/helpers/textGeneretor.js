import { HfInference } from '@huggingface/inference'
import { hfAccessToken } from '../../functions/hf-accesToke'

// import { config } from 'dotenv'
// config()

const ACCES_TOKEN = hfAccessToken

const hf = new HfInference(ACCES_TOKEN)

export const textGenerator = async (prompt) => {
  const result = await hf.chatCompletion({
    model: 'mistralai/Mistral-7B-Instruct-v0.2',
    messages: [
      {
        role: 'user',
        content:
          'Genera una rutina de entrenamiento en español, resumida como para escribir en una pizarra de gimnasio con las siguientes caracteristicas: ' +
          prompt,
      },
    ],
    max_tokens: 500,
    temperature: 0.1,
    seed: 0,
  })
  return result
}