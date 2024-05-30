import ButtonTrain from '../components/ButtonTrain'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { trainContext } from '../context/TrainProvider'
import BarProgress from '../components/BarProgress'

function PageTwo() {
  const trainPovider = useContext(trainContext)
  const { setTrain } = trainPovider
  const intensidad = ['suave', 'moderada', 'A darlo todo']

  return (
    <div className="flex h-screen  flex-col items-center md:justify-center gap-6 justify-center ">
      <div className="md:h-2/3 h-[90%]  rounded-xl shadow-2xl w-4/5 flex flex-col justify-around items-center">
        <h1 className="rubik-md text-center">¿ Para qué intensidad estás ?</h1>
        <Link
          to="/page-three"
          className=" "
          onClick={(e) => {
            setTrain((prevTrain) => {
              return { ...prevTrain, intensidad: e.target.value }
            })
          }}
        >
          <div className="flex flex-col gap-4  ">
            {intensidad.map((mod, idx) => {
              return (
                <ButtonTrain value={mod} key={idx}>
                  {mod}
                </ButtonTrain>
              )
            })}
          </div>
        </Link>

        <BarProgress progress={40}></BarProgress>
      </div>
    </div>
  )
}

export default PageTwo
