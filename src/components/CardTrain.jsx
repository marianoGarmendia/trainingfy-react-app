import SetTrain from './SetTrain'
import { useEffect, useState } from 'react'
import { useParams, Outlet, Link, useLocation } from 'react-router-dom'

const CardTrain = ({ setTrainGenerated }) => {
  const { trainName } = useParams()
  const [trainOk, setTrainOk] = useState(false)
  const location = useLocation()
  useEffect(() => {
    console.log('train seteado')
  }, [trainOk])
  return (
    <div className="bg-customInterior rounded-md p-4 md:w-2/3  md:mx-auto mx-4  my-4 flex flex-col">
      <div className="flex mb-5">
        <Link to="/">
          <img src="src/assets/angulo-izquierdo.svg" className="w-4" alt="" />
        </Link>
        <p className="p-2 font-semibold text-lg mx-auto ">{trainName}</p>
      </div>

      {/* {trainOk ? (
        <Outlet></Outlet>
      ) : (
        <SetTrain
          train={trainName}
          setTrainGenerated={setTrainGenerated}
          setTrainOk={setTrainOk}
          trainOk={trainOk}
          trainGenerated={trainGenerated}
        />
      )} */}

      {location.pathname === '/HighIntensity/generatedTrain' ? (
        <Outlet></Outlet>
      ) : (
        <SetTrain
          train={trainName}
          setTrainGenerated={setTrainGenerated}
          setTrainOk={setTrainOk}
        />
      )}
    </div>
  )
}

export default CardTrain
