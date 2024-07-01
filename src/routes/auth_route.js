import { Router } from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

import { appFirestore, getUserFirestore } from '../db.js'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'

dotenv.config()

const auth = getAuth(appFirestore)

export const authRouter = Router()

authRouter.post('/register', async (req, res) => {
  const { email, password } = req.body
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
    const token = jwt.sign(
      { uid: userCredentials.user.uid },
      process.env.JWT_SECRET_KEY
    )

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    })

    return res.send(userCredentials)
  } catch (err) {
    return res.send(err)
  }
})

authRouter.post('/login', async (req, res) => {
  const { email, password } = req.body
  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    )

    const token = jwt.sign(
      { uid: userCredentials.user.uid },
      process.env.JWT_SECRET_KEY
    )

    res.cookie('token', token, {
      httpOnly: true,

      sameSite: 'strict',
    })

    // Enviar la credential para que pueda ser valdiada por el validate Login

    return res.send(userCredentials)
  } catch (err) {
    return res.send(err)
  }
})

authRouter.post('/logout', async (req, res) => {
  const accessToken = req.cookies.token
  if (!accessToken)
    return res.status(401).json({ message: 'Access not authorized' })

  res.clearCookie('token')

  res.send()
})

authRouter.get('/verifyUser', async (req, res) => {
  const accessToken = req.cookies.token
  if (!accessToken)
    return res.status(401).json({ message: 'Access not authorized' })
  // Decoded token para obtener el id
  const uid = jwt.verify(accessToken, process.env.JWT_SECRET_KEY)
  const userFound = await getUserFirestore({ id: uid })

  res.json({ userFound })
})
