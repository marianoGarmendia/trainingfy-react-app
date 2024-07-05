import { Router } from 'express'

import { setDoc, doc, collection } from 'firebase/firestore'
import { db } from '../db.js'

import { addTrain } from '../controllers/addTrain.js'
import { getTrain } from '../controllers/getTrain.js'

export const userRouter = Router()
const userRef = collection(db, 'users')

userRouter.post('/addUser', async (req, res) => {
  const { user, uid } = req.body

  const response = await setDoc(doc(userRef, uid), user)
  return res.send(response)
})

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
