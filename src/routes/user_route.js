import { Router } from 'express'

import { addTrain } from '../controllers/addTrain.js'
import { getTrain } from '../controllers/getTrain.js'

export const userRouter = Router()

// Ruta para agregar entrenamientos con userId, trainId, train
userRouter.post('/addTrain', async (req, res) => {
  const { userId, wod, trainId, caracteristicas } = req.body

  try {
    const response = await addTrain({ userId, wod, trainId, caracteristicas })
    res.send(response)
  } catch (error) {
    res.send(error)
  }
})

// Ruta para traer los entrenamientos por id del usuario
userRouter.get('/getTrain/:userId', async (req, res) => {
  const userId = req.params.userId

  try {
    const foundWorkouts = await getTrain({ userId })
    res.send(foundWorkouts)
  } catch (error) {
    res.send(error)
  }
})
