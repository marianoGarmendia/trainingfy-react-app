// import { motion } from 'framer-motion'
import { useContext } from 'react'
import ButtonTrain from '../components/ButtonTrain'
import { Link } from 'react-router-dom'
import { trainContext } from '../context/TrainProvider'
import BarProgress from '../components/BarProgress'
function PageUno() {
  const trainPovider = useContext(trainContext)
  const { setTrain } = trainPovider
  const sector = ['Piernas', 'Brazos', 'Abdominales', 'Cuerpo entero']

  return (
    <div className="flex h-screen  flex-col items-center md:justify-center gap-6 justify-center ">
      <div className="md:h-2/3 h-[90%]  rounded-xl shadow-2xl w-4/5 flex flex-col justify-around items-center">
        <h1 className="rubik-md text-center">
          ¿ Que parte querés trabajar más ?
        </h1>
        <Link
          to="/page-two"
          className=" "
          onClick={(e) => {
            setTrain((prevTrain) => {
              return { ...prevTrain, sector: e.target.value }
            })
          }}
        >
          <div className="flex flex-col gap-4  ">
            {sector.map((mod, idx) => {
              return (
                <ButtonTrain key={idx} value={mod}>
                  {mod}
                </ButtonTrain>
              )
            })}
          </div>
        </Link>

        <BarProgress progress={20}></BarProgress>
      </div>
    </div>
  )
}

export default PageUno
