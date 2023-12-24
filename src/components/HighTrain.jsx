/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useFetch } from '../useFetch';
const url =
  'https://exercisedb.p.rapidapi.com/exercises/bodyPart/cardio?limit=5';

// eslint-disable-next-line react/prop-types
const HighTrain = ({ trainGenerated, trainOk }) => {
  const {
    timefirstBl,
    cantidadExcercisesFirstBl,
    timeSecondBl,
    cantidadExcercisesSecondBl,
    timeThirdBl,
    cantidadExcercisesThirdBl,
  } = trainGenerated;
  console.log('High train');

  const { data } = useFetch(url);
  const excercises = data?.slice(0, cantidadExcercisesFirstBl);
  console.log(excercises);

  const cantidadReps = () => {
    return Math.floor(Math.random() * 5) + 3;
  };

  return (
    <div>
      <h2 className="font-bold ">Set Core</h2>
      <h3 className="my-2 font-semibold text-md">Amrap de: {timefirstBl}</h3>
      <ul>
        {excercises ? (
          excercises.map((exc) => {
            return (
              <li key={exc.id}>
                {exc.name} x {cantidadReps() * cantidadExcercisesFirstBl} reps
              </li>
            );
          })
        ) : (
          <p>loading...</p>
        )}
      </ul>
    </div>
  );
};

export default HighTrain;
