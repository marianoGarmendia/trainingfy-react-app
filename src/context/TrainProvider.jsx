import { createContext, useState } from 'react'

export const trainContext = createContext()

export function TrainProvider({ children }) {
  const [train, setTrain] = useState({})
  const [filled, setFilled] = useState(0)
  return (
    <trainContext.Provider
      value={{
        train,
        setTrain,
        filled,
        setFilled,
      }}
    >
      {children}
    </trainContext.Provider>
  )
}
