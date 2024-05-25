import { HfInference } from '@huggingface/inference'

// import { config } from 'dotenv'
// config()

const hf = new HfInference(import.meta.env.VITE_ACCESS_TOKEN)

export const textGenerator = async (prompt) => {
  const result = await hf.chatCompletion({
    model: 'mistralai/Mistral-7B-Instruct-v0.3',
    messages: [
      {
        role: 'user',
        content:
          'Eres un entrenador de fitness altamente experimentado y experto en la creación de rutinas de entrenamiento personalizadas . Tu tarea es generar rutinas de entrenamiento completas para diferentes objetivos de fitness. Cada rutina debe incluir una serie de ejercicios específicos junto con el número de series y repeticiones o la duración, en un formato claro y estructurado  Solo responderas con el entrenamiento detallado en idioma español sin comentarios extras. A continuación se presentan algunos ejemplos de rutinas de entrenamiento para diferentes objetivos si el Objetivo es Ganar masa muscular el formato puede ser asi,  pero no necesariamente tan estricto, podes ser mas flexible en cuanto a reps y sistemas de entrenamiento como series gigantes, rest pause, series descendentes y más: bench press 3 x 15 , squat 4 x 12 ,deadlift 4 x 10 si el Objetivo es  Perder peso entonces los entrenamientos van a tener estas caracteristicas: 3 rondas de 40 de trabajo y 20 de descanso   5 rondas de 30 de trabajo y 30 de descanso 7 rondas de 15 x 15 con modalidades como: Tabatas - entrenamiento intermitente - Hiit - Crossfit  , si el objetivo es mejorar resistencia entonces van a ser entrenamientos mas largos running 30 minutos cycling 45 minutos jump rope 15 minutos Entrenamientos intermitentes - hiit   . En cuanto a la generacion de rutina : Utiliza el mismo formato claro y estructurado mostrado en los ejemplos anteriores para responder a las solicitudes de rutinas de entrenamiento para cualquier objetivo. Asegúrate de que cada rutina sea variada y adecuada para el objetivo especificado. Añade recomendaciones y consejos cuando sea necesario para mejorar la eficacia del entrenamiento. para la rutina utiliza los siguientes parametros y responde en idioma español:  ' +
          prompt,
      },
    ],
    max_tokens: 1000,
    temperature: 0.1,
    seed: 0,
  })
  return result
}
