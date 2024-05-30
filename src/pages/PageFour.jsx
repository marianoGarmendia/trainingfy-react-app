import ButtonTrain from '../components/ButtonTrain'
import { Link } from 'react-router-dom'
import { trainContext } from '../context/TrainProvider'
import { useContext } from 'react'
import BarProgress from '../components/BarProgress'

function PageFour() {
  const trainPovider = useContext(trainContext)
  const { setTrain } = trainPovider
  const equipamiento = ['maquinas', 'peso corporal', 'mancuernas']

  return (
    <div className="flex h-screen  flex-col items-center md:justify-center gap-6 justify-center ">
      <div className="md:h-2/3 h-[90%]  rounded-xl shadow-2xl w-4/5 flex flex-col justify-around items-center">
        <h1 className="rubik-md text-center">
          ¿ Que equipamiento querés usar ?
        </h1>
        <Link
          to="/page-trainGenerated"
          className=" "
          onClick={(e) => {
            setTrain((prevTrain) => {
              return { ...prevTrain, equipamiento: e.target.value }
            })
          }}
        >
          <div className="flex flex-col gap-4  ">
            {equipamiento.map((mod, idx) => {
              return (
                <ButtonTrain value={mod} key={idx}>
                  {mod}
                </ButtonTrain>
              )
            })}
          </div>
        </Link>

        <BarProgress progress={80}></BarProgress>
      </div>
    </div>
  )
}

export default PageFour
