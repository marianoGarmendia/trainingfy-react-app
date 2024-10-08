import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { authRouter } from './routes/auth_route.js'

import { userRouter } from './routes/user_route.js'

const app = express()

app.use(
  cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5174',
    credentials: true,
  })
)

app.use(express.json())
app.use(express.text())
app.use(cookieParser())

app.use(authRouter)
app.use(userRouter)

export default app
