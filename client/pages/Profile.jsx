import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../context/UserContext'
import { useWodContext } from '../context/WodContext'
import Items from '../components/Items'
import DuracionSVG from '../svg/DuracionSVG'
import ModalidadSVG from '../svg/ModalidadSVG'
import IntensidadSVG from '../svg/IntensidadSVG'
import EquipamientoSVG from '../svg/EquipamientoSVG'
import DeleteSVG from '../svg/DeleteSVG'
import { ToastContainer, toast } from 'react-toastify'
import '../App.css'

function Profile() {
  const { trainSaved, setTrainSaved, getTrain, newSaved, setNewSaved } =
    useUser()
  const { deleteWodSaved } = useWodContext()
  const [isDeleted, setIsDeleted] = useState(false)

  const notify = (message) => toast(message)

  useEffect(() => {
    if (newSaved) {
      setTrainSaved([])
      getTrain()
      setNewSaved(false)
    }
  }, [newSaved])

  const handleDelete = async (id) => {
    const deletWod = await deleteWodSaved({ wodId: id })
    if (deletWod) {
      notify('Borrado')
      setTrainSaved([])
      setIsDeleted(true)
    }
  }

  useEffect(() => {
    if (isDeleted) {
      setTimeout(() => {
        getTrain()
        setIsDeleted(false)
      }, 500)
    }
  }, [isDeleted])

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-4 p-11">
      <header className="w-full bg-[#212121] p-4 rounded-xl flex justify-between">
        <h3>Entrenamientos guardados ({trainSaved.length})</h3>
        <Link to="/presentacion">Inicio</Link>
      </header>
      <ToastContainer />
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
                  onClick={() => {
                    console.log(workout.trainId)
                  }}
                  id={workout.trainId}
                  className="bg-[#eee] h-[300px] relative  overflow-scroll scrollable w-full text-center rounded-xl  text-sm rubik-regular text-[#161714]   p-4"
                >
                  <div className="wod_container w-full relative    h-full   ">
                    <pre className="py-2 whitespace-pre-wrap    ">
                      {workout.wod}
                    </pre>
                  </div>
                </article>
                <div className="bg-[#eee] rounded-md p-2">
                  <div
                    className="border"
                    onClick={() => handleDelete(workout.trainId)}
                  >
                    <DeleteSVG></DeleteSVG>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Profile
