import { useEffect, useState, useRef, useContext } from 'react'
import { WhatsappShareButton } from 'react-share'
import { ToastContainer, toast } from 'react-toastify'
import { nanoid } from 'nanoid'
import { useUser } from '../context/UserContext'
import 'react-toastify/dist/ReactToastify.css'
import { Link } from 'react-router-dom'
import { trainContext } from '../context/TrainProvider'
import { textGenerator } from '../helpers/textGeneretor'
import Loading from '../components/Loading'
import BarProgress from '../components/BarProgress'
import WodFormatted from '../components/WodFormatted'

import IntensidadSVG from '../svg/IntensidadSVG'
import ModalidadSVG from '../svg/ModalidadSVG'
import DuracionSVG from '../svg/DuracionSVG'
import EquipamientoSVG from '../svg/EquipamientoSVG'
import GuardarSVG from '../svg/Guardarsvg'
import CompartirSVG from '../svg/CompartirSVG'
import CopiarSVG from '../svg/CopiarSVG'
import Items from '../components/Items'
import '../App.css'

function PageTrainGenerated() {
  const { user, addTrainByUser, setNewSaved } = useUser()
  const trainProvider = useContext(trainContext)
  const { userTrain, train } = trainProvider
  const [save, setSave] = useState(false)
  const [copied, setCopied] = useState(false)
  const wodRef = useRef(train)
  const [wod, setWod] = useState('')
  const [loading, setLoading] = useState(true)

  const { intensidad, objetivo, duracion, equipamiento } = train
  const notify = (message) => toast(message)

  const handleSave = () => {
    setSave(!save)
    if (!save) {
      notify('Guardado!')
      const trainId = nanoid()
      const response = addTrainByUser({ userId: user.uid, wod, trainId, train })
      if (response) setNewSaved(true)
    }
  }

  const handleCopied = () => {
    setCopied(!copied)
    navigator.clipboard.writeText(wod)
    if (!copied) notify('Copiado!')
  }

  useEffect(() => {
    if (!loading) return
    const fechData = async () => {
      if (wodRef.current.objetivo === undefined) return
      try {
        const result = await textGenerator(JSON.stringify(wodRef.current))

        setWod(result)

        setLoading(false)
      } catch (err) {
        console.error('Un error ha ocurrido: ', err)
      }
    }
    fechData()
  }, [loading])

  return (
    <div className="flex h-[100dvh]  flex-col items-center md:justify-center gap-6 justify-center ">
      <div className=" h-[100%]  py-4 rounded-xl shadow-2xl w-4/5 flex flex-col   items-center">
        <div className=" w-[90%] md:w-2/3 h-full grid gap-2 grid-rows-8 ">
          <div className="flex gap-4 justify-between">
            <div>
              <h3 className="">
                Listo {userTrain}
                <span className="text-sambayon">!</span>{' '}
              </h3>
              <p className="text-sm opacity-70">
                Según tus indicaciones he generado un entrenamiento adecuado
                para vos.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <Link
                to="/presentacion"
                className=" rounded-2xl text-sm  font-semibold rubik-md   bg-sambayon text-[#161714]  p-[10px] place-content-center text-center hover:border-white hover:border hover:text-white transition-all h-[40px] ease-in-out duration-100 cursor-pointer active:scale-95 w-[100px] "
              >
                Inicio
              </Link>
              <Link
                to="/profile"
                className=" rounded-2xl text-sm  font-semibold rubik-md   bg-sambayon text-[#161714]  p-[10px] place-content-center text-center hover:border-white hover:border hover:text-white transition-all h-[40px] ease-in-out duration-100 cursor-pointer active:scale-95 w-[100px] "
              >
                Mi perfil
              </Link>
            </div>
          </div>
          {!loading && (
            <div className="rounded-xl border border-white flex justify-around     bg-[#eee]   ">
              <Items title={objetivo}>
                <ModalidadSVG></ModalidadSVG>
              </Items>
              <Items title={intensidad}>
                <IntensidadSVG></IntensidadSVG>
              </Items>
              <Items title={duracion}>
                <DuracionSVG></DuracionSVG>
              </Items>
              <Items title={equipamiento}>
                <EquipamientoSVG></EquipamientoSVG>
              </Items>
            </div>
          )}
          {!loading && (
            <div className="flex justify-start bg-[#eee] gap-4 px-4 p-2 rounded-lg">
              <div className="cursor-pointer">
                <WhatsappShareButton url="https://trainingfy-react-app.onrender.com/">
                  <CompartirSVG></CompartirSVG>
                </WhatsappShareButton>
              </div>
              <div onClick={handleSave}>
                <GuardarSVG></GuardarSVG>
              </div>
              <div onClick={handleCopied} className="cursor-pointer">
                <CopiarSVG></CopiarSVG>
              </div>
              <ToastContainer />
            </div>
          )}

          <article
            className={
              !wod
                ? 'bg-[#eee] row-span-3  w-full text-center rounded-xl  text-sm rubik-regular text-[#161714]   p-4'
                : 'bg-[#eee] row-span-3 overflow-scroll scrollable w-full text-center rounded-xl  text-sm rubik-regular text-[#161714]   p-4'
            }
          >
            <div
              data-is-off={loading}
              className="wod_container w-full relative    h-full   "
            >
              {loading || wod === '' ? (
                <Loading></Loading>
              ) : (
                // <pre className="py-2 whitespace-pre-wrap    ">{wod}</pre>
                <WodFormatted wod={wod}></WodFormatted>
              )}
            </div>
          </article>
          <BarProgress progress={100}></BarProgress>
        </div>
      </div>
    </div>
  )
}

export default PageTrainGenerated
