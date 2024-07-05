import { collection, getDocs } from 'firebase/firestore'
import { db } from '../db.js'

export const getTrain = async ({ userId }) => {
  const trainingRef = collection(db, 'training')
  const trainingFoundByUser = await getDocs(trainingRef).then((querySnap) => {
    const trainingByUser = querySnap.docs.filter((queryDoc) => {
      return queryDoc.data().userId === userId
    })
    return trainingByUser.map((train) => train.data())
  })

  return trainingFoundByUser
}
