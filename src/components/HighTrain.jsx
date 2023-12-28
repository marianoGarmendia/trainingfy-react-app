/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { useFetch } from '../useFetch'
const url =
  'https://exercisedb.p.rapidapi.com/exercises/bodyPart/cardio?limit=5'

// eslint-disable-next-line react/prop-types
const HighTrain = ({ trainGenerated }) => {
  const [dataFetch, setDataFetch] = useState(null)
  const {
    timefirstBl,
    cantidadExcercisesFirstBl,
    timeSecondBl,
    cantidadExcercisesSecondBl,
    timeThirdBl,
    cantidadExcercisesThirdBl,
  } = trainGenerated

  const cantidadReps = (cantidad) => {
    const num = Math.floor(Math.random() * 5) + 3
    return num * cantidad
  }

  const { data } = useFetch(url)

  const excercises = (endIndex) => {
    const num = Math.floor(Math.random() * 23)
    return data?.slice(num, num + endIndex)
  }

  const excercisesFirsBl = excercises(cantidadExcercisesFirstBl)
  const excercisesSecondBl = excercises(cantidadExcercisesSecondBl)
  const excercisesThirdBl = excercises(cantidadExcercisesThirdBl)
  // const excercisesFirstBl = data?.slice(0, cantidadExcercisesFirstBl)
  console.log(excercisesFirsBl)
  console.log(excercisesSecondBl)
  return (
    <div className="text-center py-4">
      <h2 className="font-bold ">Set Core</h2>
      <h3 className="my-2 font-semibold text-md">
        Amrap de: {timefirstBl} minutos
      </h3>
      <ul>
        {Object.keys(trainGenerated).length !== 0 && excercisesFirsBl ? (
          excercisesFirsBl.map((exc, index) => {
            return (
              <li key={index}>
                {exc.name} x {cantidadReps(cantidadExcercisesFirstBl)} reps
              </li>
            )
          })
        ) : (
          <p>Loading...</p>
        )}
      </ul>
      <h2 className="font-bold my-4">Amrap de: {timeSecondBl} minutos</h2>
      <ul>
        {Object.keys(trainGenerated).length !== 0 && excercisesSecondBl ? (
          excercisesSecondBl.map((exc, index) => {
            return (
              <li key={index}>
                {exc.name} x {cantidadReps(cantidadExcercisesSecondBl)} reps
              </li>
            )
          })
        ) : (
          <p>Loading...</p>
        )}
      </ul>
      <h2 className="font-bold my-4">Amrap de: {timeThirdBl} minutos</h2>
      <ul>
        {Object.keys(trainGenerated).length !== 0 && excercisesThirdBl ? (
          excercisesThirdBl.map((exc, index) => {
            return (
              <li key={index}>
                {exc.name} x {cantidadReps(cantidadExcercisesThirdBl)} reps
              </li>
            )
          })
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </div>
  )
}

export default HighTrain
