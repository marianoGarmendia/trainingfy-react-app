import { createContext, useContext } from 'react'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

const wodContext = createContext()

export function useWodContext() {
  const wodContextValues = useContext(wodContext)

  return wodContextValues
}

export function WodProvider({ children }) {
  //   const [trainSaved, setTrainSaved] = useState()

  // Borrar uno de los entrenamientos guardados por el usuario
  const deleteWodSaved = async ({ wodId }) => {
    try {
      const response = await fetch(`${BACKEND_URL}/deleteWod/${wodId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.status === 200) {
        return true
      }
    } catch (error) {
      return false
    }
  }

  return (
    <wodContext.Provider
      value={{
        deleteWodSaved,
      }}
    >
      {children}
    </wodContext.Provider>
  )
}
