import SetTrain from './SetTrain'
import { useEffect, useState } from 'react'
import { useParams, Outlet, Link, useLocation } from 'react-router-dom'

const CardTrain = ({ setTrainGenerated, trainGenerated }) => {
  const { trainName } = useParams()
  const [trainOk, setTrainOk] = useState(false)
  const location = useLocation()
  let title = trainName.includes('PowerWoman') ? 'Power Woman' : trainName
  title = title.includes('HighIntensity') ? 'High Intensity' : title

  return (
    <div className="bg-customInterior rounded-md p-4 md:w-2/3  md:mx-auto mx-4  my-4 flex flex-col">
      <div className="flex mb-5">
        <Link to="/">
          <img src="src\assets\angulo-izquierdo.svg" className="w-4" alt="" />
        </Link>
        <p className="p-2 font-semibold text-lg mx-auto ">{title}</p>
      </div>

      {location.pathname.includes('generatedTrain') ? (
        <Outlet></Outlet>
      ) : (
        <SetTrain
          train={trainName}
          setTrainGenerated={setTrainGenerated}
          setTrainOk={setTrainOk}
          trainOk={trainOk}
          trainGenerated={trainGenerated}
        />
      )}
    </div>
  )
}

export default CardTrain
