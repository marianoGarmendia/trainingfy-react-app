import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import dotenv from 'dotenv'
dotenv.config()

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
}

export const appFirestore = initializeApp(firebaseConfig)

// Le decimos a Firestore que queremos crear una db a partir de la app que ya nos logueamos
export const db = getFirestore(appFirestore)

// Creamos una referencia a una coleccion que llamamos user, a traves del metodo collection de firestore
const userRef = collection(db, 'users')

// Agrega documentos a la coleccion user creada con un id especifico dado

// export const addUsers = async ({ id, payload }) => {
//   const res = await setDoc(doc(userRef, id), payload)
//   return res
// }

// Obtenemos todos los documentos de una coleccion, en este caso obtengo los usuarios y devuelvo por el id pasado
export const getUserFirestore = async ({ id }) => {
  const userDb = await getDocs(userRef).then((querySnap) => {
    const userFound = querySnap.docs.find((docs) => {
      return docs.id === id.uid
    })
    return userFound.data()
  })

  return userDb
}
