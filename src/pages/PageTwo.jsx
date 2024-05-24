import ButtonTrain from '../components/ButtonTrain'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { trainContext } from '../context/TrainProvider'

function PageTwo() {
  const trainPovider = useContext(trainContext)
  const { setTrain } = trainPovider
  return (
    <div className="flex justify-center flex-col items-center gap-12">
      <h1 className="font-bold">¿ Para qué intensidad estas hoy ?</h1>
      <Link
        to="/page-three"
        className=" grid md:grid-cols-3 gap-y-3 gap-x-3 w-[70%] mx-auto"
        onClick={(e) => {
          setTrain((prevTrain) => {
            return { ...prevTrain, intensidad: e.target.value }
          })
        }}
      >
        <ButtonTrain value={'liviano'}>Tranqui 🐢</ButtonTrain>
        <ButtonTrain value={'moderado'}>Para moverme un poco 😉</ButtonTrain>
        <ButtonTrain value={'alta intensidad'}>A dejarlo todo 🔥</ButtonTrain>
      </Link>
    </div>
  )
}

export default PageTwo
