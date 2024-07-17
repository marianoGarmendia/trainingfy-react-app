import ButtonTrain from '../components/ButtonTrain'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { trainContext } from '../context/TrainProvider'
import BarProgress from '../components/BarProgress'

function PageThree() {
  const trainPovider = useContext(trainContext)
  const { setTrain } = trainPovider
  const tiempo = ['Poco tiempo', '30 minutos', '40 a 60 minutos']
  return (
    <div className=" h-[90dvh] w-full px-4  flex flex-col items-center justify-around">
      <h1 className="rubik-md text-center tracking-wide col-span-2">
        ¿ Cuánto tiempo tenes para entrenar ?
      </h1>
      <div className="w-[70%]  md:w-[50%] rounded-xl shadow-2xl">
        <Link
          to="/page-four"
          className=" "
          onClick={(e) => {
            setTrain((prevTrain) => {
              return { ...prevTrain, duracion: e.target.value }
            })
          }}
        >
          <div
            className="w-full  h-full flex justify-center items-center flex-wrap
           p-4  gap-2"
          >
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
      <div className="col-span-2 w-full">
        <BarProgress progress={60}></BarProgress>
      </div>
    </div>
  )
}

export default PageThree
