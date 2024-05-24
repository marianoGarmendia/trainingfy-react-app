import ButtonTrain from '../components/ButtonTrain'
import { Link } from 'react-router-dom'
import { trainContext } from '../context/TrainProvider'
import { useContext } from 'react'

function PageFour() {
  const trainPovider = useContext(trainContext)
  const { setTrain } = trainPovider

  return (
    <div className="flex justify-center flex-col items-center gap-12">
      <h1 className="font-bold">¿ Con que entrenamos hoy ?</h1>
      <Link
        to="/page-trainGenerated"
        className=" grid md:grid-cols-3 gap-y-3 gap-x-3 w-[70%] mx-auto"
        onClick={(e) => {
          setTrain((prevTrain) => {
            return { ...prevTrain, equipamiento: e.target.value }
          })
        }}
      >
        <ButtonTrain value={'con maquinas'}>Máquinas ⚙️</ButtonTrain>
        <ButtonTrain value={'con peso corporal'}>Peso corporal 🤸 </ButtonTrain>
        <ButtonTrain value={'mancuernas, barras, discos, medball, cajones'}>
          Elementos 🏋️
        </ButtonTrain>
      </Link>
    </div>
  )
}

export default PageFour
