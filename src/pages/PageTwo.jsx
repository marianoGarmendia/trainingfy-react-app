import ButtonTrain from '../components/ButtonTrain'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { trainContext } from '../context/TrainProvider'
import BarProgress from '../components/BarProgress'

function PageTwo() {
  const trainPovider = useContext(trainContext)
  const { setTrain } = trainPovider
  const intensidad = ['Suave', 'Moderada', 'A darlo todo']

  return (
    <div className="  h-[90%] w-full px-4  flex flex-col items-center justify-around    ">
      <h1 className="rubik-md text-center tracking-wide col-span-2">
        ¿ Para qué intensidad estás ?
      </h1>
      <div className=" w-[70%]  md:w-[50%] rounded-xl shadow-2xl">
        <Link
          to="/page-three"
          className=" "
          onClick={(e) => {
            setTrain((prevTrain) => {
              return { ...prevTrain, intensidad: e.target.value }
            })
          }}
        >
          <div
            className="w-full  h-full flex justify-center items-center flex-wrap
           p-4  gap-2"
          >
            {intensidad.map((mod, idx) => {
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
        <BarProgress progress={40}></BarProgress>
      </div>
    </div>
  )
}

export default PageTwo
