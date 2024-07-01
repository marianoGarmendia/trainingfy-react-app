import { Router } from 'express'
import { collection } from 'firebase/firestore'
import { db } from '../db.js'

export const trainSavedRoute = Router()

trainSavedRoute.post('/trainSaved', async (req, res) => {})
