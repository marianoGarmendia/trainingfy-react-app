import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../context/UserContext'
import Items from '../components/Items'
import DuracionSVG from '../svg/DuracionSVG'
import ModalidadSVG from '../svg/ModalidadSVG'
import IntensidadSVG from '../svg/IntensidadSVG'
import EquipamientoSVG from '../svg/EquipamientoSVG'
import '../App.css'

function Profile() {
  const { trainSaved, setTrainSaved, getTrain, newSaved, setNewSaved } =
    useUser()

  useEffect(() => {
    if (newSaved) {
      setTrainSaved([])
      getTrain()
      setNewSaved(false)
    }
  }, [newSaved])

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-4 p-11">
      <header className="w-full bg-[#212121] p-4 rounded-xl flex justify-between">
        <h3>Entrenamientos guardados ({trainSaved.length})</h3>
        <Link to="/presentacion">Inicio</Link>
      </header>
      <div
        className="w-full  h-full grid_workout_saved
           p-4  gap-4"
      >
        {trainSaved &&
          trainSaved.map((workout) => {
            return (
              <div key={workout.trainId} className="flex flex-col gap-2">
                <div className="rounded-xl border border-white flex justify-around     bg-[#eee]   ">
                  <Items title={workout.caracteristicas.objetivo}>
                    <ModalidadSVG></ModalidadSVG>
                  </Items>
                  <Items title={workout.caracteristicas.intensidad}>
                    <IntensidadSVG></IntensidadSVG>
                  </Items>
                  <Items title={workout.caracteristicas.duracion}>
                    <DuracionSVG></DuracionSVG>
                  </Items>
                  <Items title={workout.caracteristicas.equipamiento}>
                    <EquipamientoSVG></EquipamientoSVG>
                  </Items>
                </div>
                <article
                  id={workout.trainId}
                  className="bg-[#eee] h-[300px]  overflow-scroll scrollable w-full text-center rounded-xl  text-sm rubik-regular text-[#161714]   p-4"
                >
                  {' '}
                  <div className="wod_container w-full relative    h-full   ">
                    <pre className="py-2 whitespace-pre-wrap    ">
                      {workout.wod}
                    </pre>
                  </div>
                </article>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Profile
