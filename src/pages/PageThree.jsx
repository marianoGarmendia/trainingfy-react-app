import ButtonTrain from '../components/ButtonTrain'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { trainContext } from '../context/TrainProvider'
import BarProgress from '../components/BarProgress'

function PageThree() {
  const trainPovider = useContext(trainContext)
  const { setTrain } = trainPovider
  return (
    <div className="flex  flex-col items-center md:justify-around gap-6 justify-start   h-2/3">
      <h1 className="font-bold">¿ Cuánto tiempo tenés para entrenar hoy ?</h1>
      <Link
        to="/page-four"
        className=" grid md:grid-cols-3 gap-y-3 gap-x-3 w-[70%] mx-auto"
        onClick={(e) => {
          setTrain((prevTrain) => {
            return { ...prevTrain, tiempo: e.target.value }
          })
        }}
      >
        <ButtonTrain value={'12 a 18 minutos'}>Un ratito</ButtonTrain>
        <ButtonTrain value={'30 minutos'}>30 minutos le meto</ButtonTrain>
        <ButtonTrain value={'40 a 60 minutos'}>Tengo tiempo dale!</ButtonTrain>
      </Link>
      <BarProgress progress={60}></BarProgress>
    </div>
  )
}

export default PageThree
