// import { HfInference } from '@huggingface/inference'
// import { hfAccessToken } from '../../functions/hf-accesToke'
import { generateObject } from 'ai'
import { z } from 'zod'

// import { config } from 'dotenv'
// config()

import { createOpenAI } from '@ai-sdk/openai'

const groq = createOpenAI({
  baseURL: 'https://api.groq.com/openai/v1',
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
})

// const model = groq('llama3-8b-8192')

// const ACCES_TOKEN = hfAccessToken

// const hf = new HfInference(ACCES_TOKEN)

export const textGenerator = async (prompt) => {
  try {
    const { object } = await generateObject({
      model: groq('llama-3.1-70b-versatile'),

      schema: z.object({
        tiempo: z
          .number()
          .describe('tiempo total de entrenamiento recomendado'),
        modalidad: z
          .string()
          .describe('la modalidad de entrenamiento seleccionada'),

        ejercicios: z
          .array(
            z.object({
              nombre: z.string().describe('El nombre del ejercicio'),
              series: z.string().describe('La cantidad de series recomendadas'),
              repsPorSeries: z.string().describe('Las repeticiones por series'),
              peso: z.string().describe('El peso recomendado'),
              descanso: z
                .string()
                .describe('El tiempo de descanso recomendado'),
            })
          )
          .describe('Los ejercicios recomendados'),
      }),

      system:
        'Eres un entrenador fitness especializado en armado de rutinas de entrenamiento, responde en español y genera una rutina de entrenamiento para el objetivo de fitness que se te pide',

      prompt:
        ' toma una decision en base a la sguientes caracteristicas del entrenamiento: \n ' +
        JSON.stringify(prompt),
    })

    return object
  } catch (error) {
    console.log('error', error)
  }
}

// export const textGenerator = async (prompt) => {
//   const result = await hf.chatCompletion({
//     model: 'mistralai/Mistral-7B-Instruct-v0.3',
//     messages: [
//       {
//         role: 'user',
//         content:
//           'Eres un entrenador de fitness altamente experimentado y experto en la creación de rutinas de entrenamiento personalizadas . Tu tarea es generar rutinas de entrenamiento completas para diferentes objetivos de fitness. Cada rutina debe incluir una serie de ejercicios específicos junto con el número de series y repeticiones, el peso a utilizar si es necesario, por ejemplo para hombres mancuernas de 12kg en adelante y mujeres de 5kg en adelante y el tiempo de descanso  o la duración dependiendo el objetivo, en un formato claro y estructurado  Solo responderas con el entrenamiento detallado en idioma español sin comentarios extras. A continuación se presentan algunos ejemplos de rutinas de entrenamiento para diferentes objetivos si el Objetivo es Ganar masa muscular el formato puede ser asi:  bench press 3 x 15 , squat 4 x 12 ,deadlift 4 x 10  pero no necesariamente tan estricto, podes ser mas flexible en cuanto a repeticiones y sistemas de entrenamiento como series gigantes, superseries, series descendentes, (en ese caso da una breve explicacion de como es el sistema de entrenamiento), etc. si el Objetivo es  Perder peso entonces los entrenamientos van a tener estas caracteristicas: 3 rondas de 40 de trabajo y 20 de descanso   5 rondas de 30 de trabajo y 30 de descanso 7 rondas de 15 x 15 con modalidades como: Tabatas - entrenamiento intermitente - Hiit - Crossfit  , si el objetivo es mejorar resistencia entonces van a ser entrenamientos mas largos running 30 minutos cycling 45 minutos jump rope 15 minutos Entrenamientos intermitentes - hiit   . En cuanto a la generacion de rutina : Utiliza el mismo formato claro y estructurado mostrado en los ejemplos anteriores para responder a las solicitudes de rutinas de entrenamiento para cualquier objetivo. Asegúrate de que cada rutina sea variada y adecuada para el objetivo especificado. No añadas consejos ni recomendaciones, para la rutina utiliza los siguientes parametros y responde en idioma español:  ' +
//           prompt,
//       },
//     ],
//     max_tokens: 1500,
//     temperature: 0.1,
//     seed: 0,
//   })
//   return result
// }
