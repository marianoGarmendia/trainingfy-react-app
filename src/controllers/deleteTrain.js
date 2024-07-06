import { doc, collection, deleteDoc, getDocs } from 'firebase/firestore'
import { db } from '../db.js'

export async function deleteWod({ trainId }) {
  const trainingRef = collection(db, 'training')
  const docFound = getDocs(trainingRef).then((docsRef) => {
    return docsRef.docs.find((docSnap) => {
      return docSnap.data().trainId === trainId
    })
  })

  return docFound
    .then((res) => {
      deleteDoc(doc(db, 'training', res.id))
    })
    .catch((err) => err)
}
