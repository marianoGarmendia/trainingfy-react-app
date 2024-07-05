import { useContext, useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom'
import Items from '../components/Items'
import ModalidadSVG from '../svg/ModalidadSVG'
import IntensidadSVG from '../svg/IntensidadSVG'
import DuracionSVG from '../svg/DuracionSVG'
import EquipamientoSVG from '../svg/EquipamientoSVG'
import InteligenciaSVG from '../svg/InteligenciaSVG'
import BarProgress from '../components/BarProgress'
import { trainContext } from '../context/TrainProvider.jsx'
import { useUser } from '../context/UserContext.jsx'
import CerrarSVG from '../svg/CerrarSVG.jsx'

function Presentacion() {
  const { setFilled } = useContext(trainContext)
  const { user, logout } = useUser()
  useEffect(() => {
    setFilled(0)
  }, [])

  return (
    <>
      {!user ? (
        <Navigate to="/"></Navigate>
      ) : (
        <div className="h-screen  flex flex-col items-center  ">
          <div className="h-[35%] md:h-[45%] relative md:w-[50%] w-full mx-auto shadow-inner  flex justify-between  shadow-black/30 rounded-b-3xl  ">
            <div className=" p-4 px-6 z-30">
              <p className="text-sm">Bienvenidx</p>
              <p>
                Hola {user ? user.displayName : ''}
                <span className="text-sambayon">!</span>{' '}
              </p>
              <Link className="text-xs" to="/profile">
                Mi perfil
              </Link>
            </div>
            <div onClick={logout} className="p-4 px-6 cursor-pointer z-20">
              <CerrarSVG></CerrarSVG>
            </div>
            <div className="absolute left-0 right-0 top-0 card h-full opacity-60  -z-10 bg-red  bg-center bg-cover md:bg-cover   bg-[#171717]/30 bg-blend-luminosity rounded-b-3xl "></div>
            <div className="absolute top-0 bottom-0 z-10 w-full -h-full bg-gradient-to-b from-transparent from-20% via-black/30 to-black/90 rounded-b-3xl "></div>
          </div>
          <div className="rounded-xl flex justify-around -translate-y-[50%]  z-10 bg-[#eee] md:w-[35%] mx-auto w-[90%] ">
            <Items title={'Modalidad'}>
              <ModalidadSVG></ModalidadSVG>
            </Items>
            <Items title={'Intensidad'}>
              <IntensidadSVG></IntensidadSVG>
            </Items>
            <Items title={'Duración'}>
              <DuracionSVG></DuracionSVG>
            </Items>
            <Items title={'Equipamiento'}>
              <EquipamientoSVG></EquipamientoSVG>
            </Items>
          </div>
          <div className=" md:w-[50%] w-full text-center   ">
            <p className="rubik-md text-2xl">
              Training<span className="text-sambayon">Fy</span> app
            </p>
            <p className="text-sm opacity-70 inline-flex gap-2 mb-4">
              Entrenamiento generado por <InteligenciaSVG />
            </p>
            <p className="text-xs w-[50%] tracking-wide mx-auto text-center">
              Seleccioná unas opciones y en segundos tendrás tu entrenamiento
              con recomendaciones incluidas
              <span className="text-sambayon">.</span>
            </p>
          </div>
          <Link
            to="/page-cero"
            className="rounded-2xl text-center hover:text-[#eee]  bg-sambayon text-[#161714] px-4  p-[10px] active:scale-95 transition-all ease-in-out text-sm font-semibold mt-8 hover:border-[#eee] border border-transparent hover:border"
          >
            Empezar
          </Link>
          <div className="w-full md:w-1/2 mt-12">
            <BarProgress />
          </div>
        </div>
      )}
    </>
  )
}

export default Presentacion
