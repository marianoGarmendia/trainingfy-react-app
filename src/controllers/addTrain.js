import { collection, addDoc } from 'firebase/firestore'
import { db } from '../db.js'

export const addTrain = async (data) => {
  const trainingRef = collection(db, 'training')
  const resFirestoreAddTrain = await addDoc(trainingRef, data)
  return resFirestoreAddTrain
}
