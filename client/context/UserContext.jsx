import { useState, useEffect, createContext, useContext } from 'react'

export const userContext = createContext()

export function useUser() {
  const userContextValues = useContext(userContext)

  return userContextValues
}
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

export function UserProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
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

  const getUser = async ({ id }) => {
    try {
      const response = await fetch(`${BACKEND_URL}/getUser/${id}`)
      const { userFound } = await response.json()
      setUser(userFound)
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

      logoutRes.status === 200 ? setUser(null) : console.log('Algo fallo')
    } catch (error) {
      console.log(error, 'error en contexto de usuario ')
    }
  }

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

  return (
    <userContext.Provider
      value={{
        loading,
        user,
        setUser,
        addUser,
        logout,
        getUser,
      }}
    >
      {children}
    </userContext.Provider>
  )
}
