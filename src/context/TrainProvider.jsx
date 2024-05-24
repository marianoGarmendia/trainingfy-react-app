import { createContext, useState } from 'react'

export const trainContext = createContext()

export function TrainProvider({ children }) {
  const [train, setTrain] = useState({})
  return (
    <trainContext.Provider
      value={{
        train,
        setTrain,
      }}
    >
      {children}
    </trainContext.Provider>
  )
}
