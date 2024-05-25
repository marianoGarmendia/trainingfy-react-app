// import { motion } from 'framer-motion'
import { useContext } from 'react'
import ButtonTrain from '../components/ButtonTrain'
import { Link } from 'react-router-dom'
import { trainContext } from '../context/TrainProvider'
import BarProgress from '../components/BarProgress'
function PageUno() {
  const trainPovider = useContext(trainContext)
  const { setTrain } = trainPovider

  return (
    <div className="flex  flex-col items-center md:justify-around gap-6 justify-start   h-2/3">
      <h1 className="font-bold">¿ Que parte querés trabajar más hoy ?</h1>
      <Link
        to="/page-two"
        className=" grid md:grid-cols-3 gap-y-3 gap-x-3 w-[70%] mx-auto"
        onClick={(e) => {
          setTrain((prevTrain) => {
            return { ...prevTrain, enfasis: e.target.value }
          })
        }}
      >
        <ButtonTrain value={'en brazos'}>Brazos 💪</ButtonTrain>
        <ButtonTrain value={'en las piernas'}>Piernas 🦵</ButtonTrain>
        <ButtonTrain value={'entrenar cuerpo completo'}>
          Todo el cuerpo
        </ButtonTrain>
      </Link>
      <BarProgress progress={20}></BarProgress>
    </div>
  )
}

export default PageUno
