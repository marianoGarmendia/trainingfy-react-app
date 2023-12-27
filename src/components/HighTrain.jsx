/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { useFetch } from '../useFetch'
const url =
  'https://exercisedb.p.rapidapi.com/exercises/bodyPart/cardio?limit=5'

// eslint-disable-next-line react/prop-types
const HighTrain = () => {
  const [trainCreate, setTrainCreate] = useState({})
  const [dataFetch, setDataFetch] = useState({})

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('dataFetchHigh'))
    data && setDataFetch(data)
    const train = JSON.parse(localStorage.getItem('train'))
    train && setTrainCreate(train)
  }, [])
  const {
    timefirstBl,
    cantidadExcercisesFirstBl,
    timeSecondBl,
    cantidadExcercisesSecondBl,
    timeThirdBl,
    cantidadExcercisesThirdBl,
  } = trainCreate

  const cantidadReps = () => {
    return Math.floor(Math.random() * 5) + 3
  }
  // const reps = cantidadReps() * cantidadExcercisesFirstBl
  // const excercises = data?.slice(0, cantidadExcercisesFirstBl)

  return (
    <div>
      <h2 className="font-bold ">Set Core</h2>
      <h3 className="my-2 font-semibold text-md">Amrap de: 5</h3>
      {/* <ul>
        {excercises ? (
          excercises.map((exc, index) => {
            return (
              <li key={index}>
                {exc.name} x {cantidadReps() * cantidadExcercisesFirstBl} reps
              </li>
            )
          })
        ) : (
          <p>Loading...</p>
        )}
      </ul> */}
    </div>
  )
}

export default HighTrain
