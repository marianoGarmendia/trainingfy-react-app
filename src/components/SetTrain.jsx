// import React from "react";
import ExerciseList from './ExercisesList'
import { useEffect, useState } from 'react'
import SubmitBtn from './SubmitBtn'
import InputEl from './InputEl'
import SubmitError from './SubmitError'
import { useFetch } from '../useFetch'

import { useNavigate } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const SetTrain = ({ train, setTrainGenerated, setTrainOk }) => {
  const [loaded, setLoaded] = useState(false)
  // const [trainOk, setTrainOk] = useState(false)
  // const [trainGenerated, setTrainGenerated] = useState({})

  // Seteando la cantidad de ejercicios por bloque High
  const [cantidadExcercisesFirstBl, setCantidadExcercisesFirstBl] = useState(2)
  const [cantidadExcercisesSecondBl, setCantidadExcercisesSecondBl] =
    useState(2)
  const [cantidadExcercisesThirdBl, setCantidadExcercisesThirdBl] = useState(2)

  // Seteando la cantidad de ejercicios por bloque Functio
  const [
    cantidadExcercisesFirstBlFunctio,
    setCantidadExcercisesFirstBlFunctio,
  ] = useState(2)

  const [
    cantidadExcercisesSecondBlFunctio,
    setCantidadExcercisesSecondBlFunctio,
  ] = useState(2)

  // Mensaje de error High cuando envian el form incompleto
  const [messageErrorHigh, setMessageError] = useState(false)

  // Mensaje de error de cross cuando envian el form incompleto
  const [messageErrorCross, setMessageErrorCross] = useState(false)

  // Mensaje error de Functio cuando envian el form incompleto
  const [messageErrorFunctio, setMessageErrorFunctio] = useState(false)

  // Mensaje error de Power woman cuando envian el form incompleto
  const [messageErrorPower, setMessageErrorPower] = useState(false)

  // Modadlidad de wod
  const [wodModalidad, setWodModalidad] = useState('')

  // Seteando el tiempo de entrenamiento de High intensity , este estado tmb determina cual es el boton clickeado en cada campo

  const [timefirstBl, setTimeFirstBl] = useState('')
  const [timeSecondBl, setTimeSecondBl] = useState('')
  const [timeThirdBl, setTimeThirdBl] = useState('')

  // Tiempo del segundo bloque de crossfit
  const [crossTime, setCrossTime] = useState('')

  // Enfoque del entrenamiento de crossfit
  const [focusTrainCross, setFocusTrainCross] = useState('')

  // Seteando la modalidad del primer bloque de Crossfit
  const [crossModalidad, setCrossModalidad] = useState('')

  // Seteando el tiempo de bloques de Functional
  const [timefirstBlFunctio, setTimeFirstBlFunctio] = useState('')
  const [timeSecondBlFunctio, setTimeSecondBlFunctio] = useState('')

  // Seteando la modalidad de power
  const [powerModalidad, setPowerModalidad] = useState('')

  // Seteando el tiempo de power
  const [timePower, setTimePower] = useState('')

  // Entrenamiento generado

  // Los valores que necesita el entrenamiento generado
  console.log(train)

  const high = /High\s?Intensity/i
  const crossfit = 'Crossfit'
  const functional = 'Functional'
  const powerWoman = /Power\s?woman/i

  if (high.test(train)) {
    const { data } = useFetch(
      'https://exercisedb.p.rapidapi.com/exercises/bodyPart/cardio?limit=5'
    )
    const excercises = data && data.slice(0, cantidadExcercisesFirstBl)
    excercises &&
      localStorage.setItem('dataFetchHigh', JSON.stringify(excercises))
  }

  const buttonClass = `bg-sambayon text-customInterior text-center w-2/3  sm:mx-2 mx-auto mt-2 hover:scale-105 rounded-sm p-2 font-semibold hover:cursor-pointer outline-none focus:ring-2 focus:ring-white focus:text-white  `

  const buttonClassSelect = `bg-sambayon text-customInterior text-center w-2/3  sm:mx-2 mx-auto mt-2 hover:scale-105 rounded-sm p-2 font-semibold hover:cursor-pointer outline-none focus:ring-2 focus:ring-white focus:text-white 
     ring-2 ring-white text-white scale-105 
  `
  const navigate = useNavigate()

  const handleSubmitHigh = (e) => {
    e.preventDefault()
    const campos = [
      timefirstBl,
      cantidadExcercisesFirstBl,
      timeSecondBl,
      cantidadExcercisesSecondBl,
      timeThirdBl,
      cantidadExcercisesThirdBl,
    ]

    const camposCompletos = campos.every(Boolean)

    // eslint-disable-next-line no-unused-expressions
    if (camposCompletos) {
      setTrainGenerated({
        timefirstBl,
        cantidadExcercisesFirstBl,
        timeSecondBl,
        cantidadExcercisesSecondBl,
        timeThirdBl,
        cantidadExcercisesThirdBl,
      })
      setTrainOk(true)
      navigate('generatedTrain')
      localStorage.setItem(
        'train',
        JSON.stringify({
          timefirstBl,
          cantidadExcercisesFirstBl,
          timeSecondBl,
          cantidadExcercisesSecondBl,
          timeThirdBl,
          cantidadExcercisesThirdBl,
        })
      )
    } else {
      setMessageError(true)
    }
  }

  const handleSubmitCross = (e) => {
    e.preventDefault()
    const campos = [crossModalidad, wodModalidad, crossTime, focusTrainCross]
    const trainCompleted = {
      crossModalidad,
      wodModalidad,
      crossTime,
      focusTrainCross,
    }
    const camposCompletos = campos.every(Boolean)
    // eslint-disable-next-line no-unused-expressions
    camposCompletos
      ? setMessageErrorCross(false) &
        setTrainGenerated(trainCompleted) &
        setTrainOk(true) &
        navigate('generatedTrain') &
        setTrainOk(true)
      : setMessageErrorCross(true)
  }

  const handleSubmitFunctio = (e) => {
    e.preventDefault()
    const campos = [
      timefirstBlFunctio,
      cantidadExcercisesFirstBlFunctio,
      timeSecondBlFunctio,
      cantidadExcercisesSecondBlFunctio,
    ]
    const camposCompletos = campos.every(Boolean)
    // eslint-disable-next-line no-unused-expressions
    camposCompletos
      ? setMessageErrorFunctio(false) &
        setTrainGenerated(campos) &
        navigate('generatedTrain') &
        setTrainOk(true)
      : setMessageErrorFunctio(true)
  }

  const handleSubmitPower = (e) => {
    e.preventDefault()
    const campos = [powerModalidad, timePower]
    const camposCompletos = campos.every(Boolean)
    // eslint-disable-next-line no-unused-expressions
    camposCompletos
      ? setMessageErrorPower(false) &
        setTrainGenerated(campos) &
        navigate('generatedTrain') &
        setTrainOk(true)
      : setMessageErrorPower(true)
  }

  return (
    <>
      {/* {trainOk ? (
        high.test(train) ? (
          <TrainGenerated
            train={train}
            // trainGenerated={}
            trainOk={trainOk}
          />
        ) : train === 'Crossfit' ? (
          <TrainGenerated train={train} />
        ) : train === 'Functional' ? (
          <div>Entrenamiento Generado{train}</div>
        ) : (
          train === 'Power Woman' && <div>Entrenamiento Generado{train}</div>
        )
      ) : ( */}
      {
        <div className="bg-customInterior rounded-md p-4 md:w-2/3  md:mx-auto mx-4">
          {high.test(train) ? (
            <form onSubmit={handleSubmitHigh}>
              <p className="p-2 text-center">
                Elige el tiempo del primer bloque
              </p>
              <div className="flex flex-col sm:flex-row justify-evenly  w-full ">
                <InputEl
                  className={
                    timefirstBl === '8 minutos'
                      ? buttonClassSelect
                      : buttonClass
                  }
                  defaultValue="8 minutos"
                  onClickProp={(e) => {
                    setTimeFirstBl(e.target.defaultValue)
                  }}
                />
                <InputEl
                  type="button"
                  className={
                    timefirstBl === '10 minutos'
                      ? buttonClassSelect
                      : buttonClass
                  }
                  defaultValue="10 minutos"
                  onClickProp={(e) => setTimeFirstBl(e.target.defaultValue)}
                />
                <InputEl
                  type="button"
                  className={
                    timefirstBl === '12 minutos'
                      ? buttonClassSelect
                      : buttonClass
                  }
                  defaultValue="12 minutos"
                  onClickProp={(e) => setTimeFirstBl(e.target.defaultValue)}
                />
              </div>
              <div className="my-2">
                <ExerciseList
                  core={true}
                  onChangeProp={(e) => {
                    setCantidadExcercisesFirstBl(e.target.value)
                  }}
                />
                <p className="p-2 text-center">
                  Elige el tiempo del segundo Bloque
                </p>
                <div className="flex flex-col sm:flex-row justify-evenly  w-full ">
                  <InputEl
                    className={
                      timeSecondBl === '10 minutos'
                        ? buttonClassSelect
                        : buttonClass
                    }
                    defaultValue="10 minutos"
                    onClickProp={(e) => {
                      setTimeSecondBl(e.target.defaultValue)
                    }}
                  />

                  <InputEl
                    className={
                      timeSecondBl === '14 minutos'
                        ? buttonClassSelect
                        : buttonClass
                    }
                    defaultValue="14 minutos"
                    onClickProp={(e) => {
                      setTimeSecondBl(e.target.defaultValue)
                    }}
                  />

                  <InputEl
                    className={
                      timeSecondBl === '18 minutos'
                        ? buttonClassSelect
                        : buttonClass
                    }
                    defaultValue="18 minutos"
                    onClickProp={(e) => {
                      setTimeSecondBl(e.target.defaultValue)
                    }}
                  />
                </div>
                <ExerciseList
                  core={true}
                  onChangeProp={(e) => {
                    setCantidadExcercisesSecondBl(e.target.value)
                  }}
                />
                <p className="p-2 text-center">
                  Elige el tiempo del tercer Bloque
                </p>
                <div className="flex flex-col sm:flex-row justify-evenly  w-full ">
                  <InputEl
                    className={
                      timeThirdBl === '10 minutos'
                        ? buttonClassSelect
                        : buttonClass
                    }
                    defaultValue="10 minutos"
                    onClickProp={(e) => {
                      setTimeThirdBl(e.target.defaultValue)
                    }}
                  />

                  <InputEl
                    className={
                      timeThirdBl === '14 minutos'
                        ? buttonClassSelect
                        : buttonClass
                    }
                    defaultValue="14 minutos"
                    onClickProp={(e) => {
                      setTimeThirdBl(e.target.defaultValue)
                    }}
                  />

                  <InputEl
                    className={
                      timeThirdBl === '18 minutos'
                        ? buttonClassSelect
                        : buttonClass
                    }
                    defaultValue="18 minutos"
                    onClickProp={(e) => {
                      setTimeThirdBl(e.target.defaultValue)
                    }}
                  />
                </div>
                <ExerciseList
                  core={true}
                  onChangeProp={(e) => {
                    setCantidadExcercisesThirdBl(e.target.value)
                  }}
                />
              </div>
              {messageErrorHigh ? <SubmitError /> : null}
              <SubmitBtn></SubmitBtn>
            </form>
          ) : train === crossfit ? (
            <form onSubmit={handleSubmitCross}>
              <p className="p-2 text-center">Elige el primer Bloque</p>
              <div className="flex flex-col sm:flex-row justify-evenly  w-full">
                <InputEl
                  className={
                    crossModalidad === 'Fuerza'
                      ? buttonClassSelect
                      : buttonClass
                  }
                  onClickProp={(e) => {
                    setCrossModalidad(e.target.defaultValue)
                  }}
                  defaultValue="Fuerza"
                />

                <InputEl
                  className={
                    crossModalidad === 'Skills'
                      ? buttonClassSelect
                      : buttonClass
                  }
                  onClickProp={(e) => {
                    setCrossModalidad(e.target.defaultValue)
                  }}
                  defaultValue="Skills"
                />

                <InputEl
                  className={
                    crossModalidad === 'Core' ? buttonClassSelect : buttonClass
                  }
                  onClickProp={(e) => {
                    setCrossModalidad(e.target.defaultValue)
                  }}
                  defaultValue="Core"
                />

                <InputEl
                  className={
                    crossModalidad === 'Ninguno'
                      ? buttonClassSelect
                      : buttonClass
                  }
                  onClickProp={(e) => {
                    setCrossModalidad(e.target.defaultValue)
                  }}
                  defaultValue="Ninguno"
                />
              </div>
              <div className="mt-4">
                <p className="p-2 text-center ">
                  Elige la modalidad del segundo bloque
                </p>
                <div className="flex flex-col sm:flex-row justify-evenly  w-full my-4">
                  <InputEl
                    className={
                      wodModalidad === 'A completar'
                        ? buttonClassSelect
                        : buttonClass
                    }
                    defaultValue="A completar"
                    onClickProp={(e) => {
                      setWodModalidad(e.target.defaultValue)
                    }}
                  />

                  <InputEl
                    className={
                      wodModalidad === 'Amrap' ? buttonClassSelect : buttonClass
                    }
                    defaultValue="Amrap"
                    onClickProp={(e) => {
                      setWodModalidad(e.target.defaultValue)
                    }}
                  />
                  <InputEl
                    className={
                      wodModalidad === 'Por rondas'
                        ? buttonClassSelect
                        : buttonClass
                    }
                    defaultValue="Por rondas"
                    onClickProp={(e) => {
                      setWodModalidad(e.target.defaultValue)
                    }}
                  />
                  <InputEl
                    className={
                      wodModalidad === 'OTM' ? buttonClassSelect : buttonClass
                    }
                    defaultValue="OTM"
                    onClickProp={(e) => {
                      setWodModalidad(e.target.defaultValue)
                    }}
                  />
                </div>
                <p className="p-2 text-center ">
                  Elige el tiempo del segundo Bloque
                </p>
                <div className="flex flex-col sm:flex-row justify-evenly  w-full my-4 ">
                  <InputEl
                    className={
                      crossTime === '10 minutos'
                        ? buttonClassSelect
                        : buttonClass
                    }
                    defaultValue="10 minutos"
                    onClickProp={(e) => {
                      setCrossTime(e.target.defaultValue)
                    }}
                  />
                  <InputEl
                    className={
                      crossTime === '14 minutos'
                        ? buttonClassSelect
                        : buttonClass
                    }
                    defaultValue="14 minutos"
                    onClickProp={(e) => {
                      setCrossTime(e.target.defaultValue)
                    }}
                  />
                  <InputEl
                    className={
                      crossTime === '18 minutos'
                        ? buttonClassSelect
                        : buttonClass
                    }
                    defaultValue="18 minutos"
                    onClickProp={(e) => {
                      setCrossTime(e.target.defaultValue)
                    }}
                  />
                  <InputEl
                    className={
                      crossTime === '+ 20 minutos'
                        ? buttonClassSelect
                        : buttonClass
                    }
                    defaultValue="+ 20 minutos"
                    onClickProp={(e) => {
                      setCrossTime(e.target.defaultValue)
                    }}
                  />
                </div>
                <p className="p-2 text-center ">
                  Elige el enfoque del entrenamiento
                </p>
                <div className="flex flex-col sm:flex-row justify-evenly  w-full my-4 ">
                  <InputEl
                    className={
                      focusTrainCross === 'Gymnastic'
                        ? buttonClassSelect
                        : buttonClass
                    }
                    defaultValue="Gymnastic"
                    onClickProp={(e) => {
                      setFocusTrainCross(e.target.defaultValue)
                    }}
                  />
                  <InputEl
                    className={
                      focusTrainCross === 'Weightlifting'
                        ? buttonClassSelect
                        : buttonClass
                    }
                    defaultValue="Weightlifting"
                    onClickProp={(e) => {
                      setFocusTrainCross(e.target.defaultValue)
                    }}
                  />
                  <InputEl
                    className={
                      focusTrainCross === 'Cardio'
                        ? buttonClassSelect
                        : buttonClass
                    }
                    defaultValue="Cardio"
                    onClickProp={(e) => {
                      setFocusTrainCross(e.target.defaultValue)
                    }}
                  />
                  <InputEl
                    className={
                      focusTrainCross === 'Combinacion'
                        ? buttonClassSelect
                        : buttonClass
                    }
                    defaultValue="Combinacion"
                    onClickProp={(e) => {
                      setFocusTrainCross(e.target.defaultValue)
                    }}
                  />
                </div>
                {messageErrorCross ? <SubmitError /> : null}
              </div>
              <SubmitBtn />
            </form>
          ) : train === functional ? (
            <form onSubmit={handleSubmitFunctio}>
              <p className="p-2 text-center">
                Elige el tiempo del primer bloque
              </p>
              <div className="flex flex-col sm:flex-row justify-evenly  w-full ">
                <InputEl
                  type="button"
                  className={
                    timefirstBlFunctio === '8 minutos'
                      ? buttonClassSelect
                      : buttonClass
                  }
                  defaultValue="8 minutos"
                  onClickProp={(e) =>
                    setTimeFirstBlFunctio(e.target.defaultValue)
                  }
                />
                <InputEl
                  type="button"
                  className={
                    timefirstBlFunctio === '10 minutos'
                      ? buttonClassSelect
                      : buttonClass
                  }
                  defaultValue="10 minutos"
                  onClickProp={(e) =>
                    setTimeFirstBlFunctio(e.target.defaultValue)
                  }
                />
                <InputEl
                  type="button"
                  className={
                    timefirstBlFunctio === '12 minutos'
                      ? buttonClassSelect
                      : buttonClass
                  }
                  defaultValue="12 minutos"
                  onClickProp={(e) =>
                    setTimeFirstBlFunctio(e.target.defaultValue)
                  }
                />
              </div>
              <div className="my-2">
                <ExerciseList
                  core={true}
                  onChangeProp={(e) => {
                    setCantidadExcercisesFirstBlFunctio(e.target.value)
                  }}
                />
                <p className="p-2 text-center">
                  Elige el tiempo del segundo Bloque
                </p>
                <div className="flex flex-col sm:flex-row justify-evenly  w-full ">
                  <InputEl
                    type="button"
                    className={
                      timeSecondBlFunctio === '12 minutos'
                        ? buttonClassSelect
                        : buttonClass
                    }
                    defaultValue="12 minutos"
                    onClickProp={(e) =>
                      setTimeSecondBlFunctio(e.target.defaultValue)
                    }
                  />
                  <InputEl
                    type="button"
                    className={
                      timeSecondBlFunctio === '14 minutos'
                        ? buttonClassSelect
                        : buttonClass
                    }
                    defaultValue="14 minutos"
                    onClickProp={(e) =>
                      setTimeSecondBlFunctio(e.target.defaultValue)
                    }
                  />
                  <InputEl
                    type="button"
                    className={
                      timeSecondBlFunctio === '18 minutos'
                        ? buttonClassSelect
                        : buttonClass
                    }
                    defaultValue="18 minutos"
                    onClickProp={(e) =>
                      setTimeSecondBlFunctio(e.target.defaultValue)
                    }
                  />
                </div>
                <ExerciseList
                  core={true}
                  onChangeProp={(e) => {
                    setCantidadExcercisesSecondBlFunctio(e.target.value)
                  }}
                />
              </div>
              {messageErrorFunctio ? <SubmitError /> : null}
              <SubmitBtn />
            </form>
          ) : (
            powerWoman.test(train) && (
              <form onSubmit={handleSubmitPower}>
                <p className="p-2 text-center">
                  Elige la intensidad del entrenamiento
                </p>
                <div className="flex flex-col sm:flex-row justify-evenly  w-full ">
                  <InputEl
                    className={
                      powerModalidad === 'Suave'
                        ? buttonClassSelect
                        : buttonClass
                    }
                    onClickProp={(e) => {
                      setPowerModalidad(e.target.defaultValue)
                    }}
                    defaultValue="Suave"
                  />
                  <InputEl
                    className={
                      powerModalidad === 'Moderada'
                        ? buttonClassSelect
                        : buttonClass
                    }
                    onClickProp={(e) => {
                      setPowerModalidad(e.target.defaultValue)
                    }}
                    defaultValue="Moderada"
                  />
                  <InputEl
                    className={
                      powerModalidad === 'Intensa'
                        ? buttonClassSelect
                        : buttonClass
                    }
                    onClickProp={(e) => {
                      setCrossModalidad(e.target.defaultValue)
                    }}
                    defaultValue="Intensa"
                  />
                </div>
                <div className="my-4">
                  <p className="p-2 text-center">
                    Elige el tiempo total de entrenamiento
                  </p>
                  <div className="flex flex-col sm:flex-row justify-evenly  w-full ">
                    <InputEl
                      className={
                        timePower === '12 minutos'
                          ? buttonClassSelect
                          : buttonClass
                      }
                      onClickProp={(e) => {
                        setTimePower(e.target.defaultValue)
                      }}
                      defaultValue="12 minutos"
                    />
                    <InputEl
                      className={
                        timePower === '15 minutos'
                          ? buttonClassSelect
                          : buttonClass
                      }
                      onClickProp={(e) => {
                        setTimePower(e.target.defaultValue)
                      }}
                      defaultValue="15 minutos"
                    />
                    <InputEl
                      className={
                        timePower === '+ 18 minutos'
                          ? buttonClassSelect
                          : buttonClass
                      }
                      onClickProp={(e) => {
                        setTimePower(e.target.defaultValue)
                      }}
                      defaultValue="+ 18 minutos"
                    />
                  </div>
                </div>
                {messageErrorPower ? <SubmitError /> : null}
                <SubmitBtn />
              </form>
            )
          )}
        </div>
      }
    </>
  )
}

export default SetTrain
