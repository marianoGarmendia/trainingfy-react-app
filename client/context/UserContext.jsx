import { useState, useEffect, createContext, useContext } from 'react'
import { json } from 'react-router-dom'

export const userContext = createContext()

export function useUser() {
  const userContextValues = useContext(userContext)

  return userContextValues
}
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

export function UserProvider({ children }) {
  const [trainSaved, setTrainSaved] = useState([])
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [newSaved, setNewSaved] = useState(true)

  // en el register debo agregar el usuario a la db ,no en el login
  const addUser = async (userLogged) => {
    try {
      const response = await fetch(`${BACKEND_URL}/addUser`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          uid: userLogged.user.uid,
          user: userLogged.user,
        }),
        credentials: 'include',
      })
      return response
    } catch (error) {
      console.log('useContext error')
    }
  }

  // Obtengo el usuario desde la base de datos de Firestore
  const getUser = async ({ id }) => {
    try {
      const response = await fetch(`${BACKEND_URL}/getUser/${id}`)
      const { userFound } = await response.json()
      setUser(userFound)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const logout = async () => {
    try {
      const logoutRes = await fetch(`${BACKEND_URL}/logout`, {
        method: 'POST',
        credentials: 'include',
      })

      if (logoutRes.status === 200) {
        setTrainSaved([])
        setNewSaved(true)
        setUser(null)
      } else {
        console.log('Algo fallo en cerrar sesion')
      }
    } catch (error) {
      console.log(error, 'error en contexto de usuario ')
    }
  }

  // Al recargar la página verifico si hay un usuario con sesion mediante el envío de las cookies
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${BACKEND_URL}/verifyUser`, {
          credentials: 'include',
        })
        const userRes = await response.json()

        const { userFound } = userRes

        setUser(userFound)
        setLoading(false)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchData()
  }, [])

  async function getTrain() {
    const training = await fetch(`${BACKEND_URL}/getTrain/${user.uid}`)
    const workoutFound = await training.json()

    workoutFound.forEach((workout) => {
      setTrainSaved((prevWorkout) => [
        ...prevWorkout,
        {
          trainId: workout.trainId,
          wod: workout.wod,
          caracteristicas: workout.caracteristicas,
        },
      ])
    })
  }

  const addTrainByUser = async ({ userId, wod, trainId, train }) => {
    try {
      const response = await fetch(`${BACKEND_URL}/addTrain`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          wod,
          trainId,
          caracteristicas: train,
        }),
      })
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <userContext.Provider
      value={{
        loading,
        setLoading,
        user,
        setUser,
        addUser,
        logout,
        getUser,
        addTrainByUser,
        trainSaved,
        setTrainSaved,
        getTrain,
        setNewSaved,
        newSaved,
      }}
    >
      {children}
    </userContext.Provider>
  )
}
