import ButtonTrain from '../components/ButtonTrain'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { trainContext } from '../context/TrainProvider'
import BarProgress from '../components/BarProgress'

function PageThree() {
  const trainPovider = useContext(trainContext)
  const { setTrain } = trainPovider
  const tiempo = ['Un ratito', '30 minutos', '40 a 60 minutos']
  return (
    <div className="flex h-2/3  flex-col items-center  gap-6 justify-around ">
      <div className="md:h-2/3 h-[90%]  rounded-xl shadow-2xl w-4/5 flex flex-col justify-around items-center">
        <h1 className="rubik-md text-center">
          ¿ Que objetivo tenés para el entrenamiento de hoy ?
        </h1>
        <Link
          to="/page-four"
          className=" "
          onClick={(e) => {
            setTrain((prevTrain) => {
              return { ...prevTrain, duracion: e.target.value }
            })
          }}
        >
          <div className="flex flex-col gap-4  ">
            {tiempo.map((mod, idx) => {
              return (
                <ButtonTrain value={mod} key={idx}>
                  {mod}
                </ButtonTrain>
              )
            })}
          </div>
        </Link>
      </div>
      <BarProgress progress={60}></BarProgress>
    </div>
  )
}

export default PageThree
