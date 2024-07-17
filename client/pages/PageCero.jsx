import { useContext } from 'react'

import { Link } from 'react-router-dom'
import ButtonTrain from '../components/ButtonTrain'
import { trainContext } from '../context/TrainProvider'
import BarProgress from '../components/BarProgress'

function PageCero() {
  const trainPovider = useContext(trainContext)
  const modalidad = ['Ganar musculo', 'Algo variado', 'Quemar calorias']

  const { setTrain } = trainPovider

  return (
    <div className=" h-[90dvh] w-full px-4  flex flex-col items-center justify-around  ">
      <h1 className="rubik-md text-center tracking-wide col-span-2">
        ¿ Que objetivo tenés para el entrenamiento de hoy ?
      </h1>
      <div className=" w-[70%]  md:w-[50%] rounded-xl shadow-2xl ">
        <Link
          to="/page-one"
          onClick={(e) => {
            setTrain((prevTrain) => {
              return { ...prevTrain, objetivo: e.target.value }
            })
          }}
        >
          <div
            className="  w-full  h-full flex justify-center items-center flex-wrap
           p-4  gap-2  "
          >
            {modalidad.map((mod, idx) => {
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
        <BarProgress progress={0}></BarProgress>
      </div>
    </div>
  )
}

export default PageCero
