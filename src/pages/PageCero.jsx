import { useContext } from 'react'
import { Link } from 'react-router-dom'
import ButtonTrain from '../components/ButtonTrain'
import { trainContext } from '../context/TrainProvider'
import BarProgress from '../components/BarProgress'

function PageUno() {
  const trainPovider = useContext(trainContext)
  const { setTrain } = trainPovider

  return (
    <div className="flex  flex-col items-center md:justify-around gap-6 justify-start   h-2/3 ">
      <h1 className="font-bold">
        ¿ Que objetivo tenés para el entrenamiento de hoy ?
      </h1>
      <Link
        to="/page-one"
        className=" grid md:grid-cols-3 gap-y-3 gap-x-3 w-[70%] mx-auto"
        onClick={(e) => {
          setTrain((prevTrain) => {
            return { ...prevTrain, objetivo: e.target.value }
          })
        }}
      >
        <ButtonTrain value={'ganar musculo'}>Ganar músculo 💪</ButtonTrain>
        <ButtonTrain value={'Quemar grasa, ejercicios cardiovasculares'}>
          Quemar calorías 🔥
        </ButtonTrain>
        <ButtonTrain value={'combinar distintos ejercicios variados'}>
          Algo variado
        </ButtonTrain>
      </Link>
      <BarProgress progress={0}></BarProgress>
    </div>
  )
}

export default PageUno
