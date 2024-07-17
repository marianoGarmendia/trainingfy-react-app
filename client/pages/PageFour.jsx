import ButtonTrain from '../components/ButtonTrain'
import { Link } from 'react-router-dom'
import { trainContext } from '../context/TrainProvider'
import { useContext } from 'react'
import BarProgress from '../components/BarProgress'

function PageFour() {
  const trainPovider = useContext(trainContext)
  const { setTrain } = trainPovider
  const equipamiento = ['Máquinas', 'Peso corporal', 'Mancuernas y Elementos']

  return (
    <div className=" h-[90dvh] w-full px-4  flex flex-col items-center justify-around">
      <h1 className="rubik-md text-center tracking-wide col-span-2">
        ¿ Que equipamiento querés usar ?
      </h1>
      <div className="w-[70%]  md:w-[50%] rounded-xl shadow-2xl">
        <Link
          to="/page-trainGenerated"
          className=" "
          onClick={(e) => {
            setTrain((prevTrain) => {
              return { ...prevTrain, equipamiento: e.target.value }
            })
          }}
        >
          <div
            className="w-full  h-full flex justify-center items-center flex-wrap
           p-4  gap-2"
          >
            {equipamiento.map((mod, idx) => {
              return (
                <ButtonTrain value={mod} key={idx}>
                  {mod}
                </ButtonTrain>
              )
            })}
          </div>
        </Link>
      </div>
      <div className="col-span-2 w-full">
        <BarProgress progress={80}></BarProgress>
      </div>
    </div>
  )
}

export default PageFour
