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
    <div className="  h-[90dvh] w-full px-4  flex flex-col items-center justify-around     ">
      <h1 className="rubik-md text-center tracking-wide col-span-2">
        ¿ Que parte querés trabajar más ?
      </h1>
      <div className="w-[70%]  md:w-[50%] rounded-xl shadow-2xl">
        <Link
          to="/page-two"
          className=" "
          onClick={(e) => {
            setTrain((prevTrain) => {
              return { ...prevTrain, sector: e.target.value }
            })
          }}
        >
          <div
            className="w-full  h-full flex justify-center items-center flex-wrap
           p-4  gap-2"
          >
            {sector.map((mod, idx) => {
              return (
                <ButtonTrain key={idx} value={mod}>
                  {mod}
                </ButtonTrain>
              )
            })}
          </div>
        </Link>
      </div>
      <div className="col-span-2 w-full">
        <BarProgress progress={20}></BarProgress>
      </div>
    </div>
  )
}

export default PageUno
