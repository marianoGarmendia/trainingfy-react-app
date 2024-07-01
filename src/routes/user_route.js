import { Router } from 'express'
import { setDoc, doc, collection } from 'firebase/firestore'
import { db } from '../db.js'

export const userRouter = Router()
const userRef = collection(db, 'users')

// Esto puede ser reemplazado por el backend asi no lo accedo del frontend
userRouter.post('/addUser', async (req, res) => {
  const { user, uid } = req.body

  const response = await setDoc(doc(userRef, uid), user)
  return res.send(response)
})
