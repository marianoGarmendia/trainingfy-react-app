import { useContext } from 'react'

import { Link } from 'react-router-dom'
import ButtonTrain from '../components/ButtonTrain'
import { trainContext } from '../context/TrainProvider'
import BarProgress from '../components/BarProgress'

function PageCero() {
  const trainPovider = useContext(trainContext)
  const modalidad = ['Ganar musculo', 'algo variado', 'quemar calorias']

  const { setTrain } = trainPovider

  return (
    <div className="flex h-screen  flex-col items-center md:justify-center gap-6 justify-center ">
      <div className="md:h-2/3 h-[90%]  rounded-xl shadow-2xl w-4/5 flex flex-col justify-around items-center">
        <h1 className="rubik-md text-center">
          ¿ Que objetivo tenés para el entrenamiento de hoy ?
        </h1>
        <Link
          to="/page-one"
          className=" "
          onClick={(e) => {
            setTrain((prevTrain) => {
              return { ...prevTrain, objetivo: e.target.value }
            })
          }}
        >
          <div className="flex flex-col gap-4  ">
            {modalidad.map((mod, idx) => {
              return (
                <ButtonTrain key={idx} value={mod}>
                  {mod}
                </ButtonTrain>
              )
            })}
          </div>
        </Link>

        <BarProgress progress={0}></BarProgress>
      </div>
    </div>
  )
}

export default PageCero
