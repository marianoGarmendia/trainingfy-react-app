import { useEffect, useState, useRef, useContext } from 'react'
import { Link } from 'react-router-dom'
import { trainContext } from '../context/TrainProvider'
import { textGenerator } from '../helpers/textGeneretor'
import Loading from '../components/Loading'
import BarProgress from '../components/BarProgress'

import IntensidadSVG from '../svg/IntensidadSVG'
import ModalidadSVG from '../svg/ModalidadSVG'
import DuracionSVG from '../svg/DuracionSVG'
import EquipamientoSVG from '../svg/EquipamientoSVG'
import Items from '../components/Items'

function PageTrainGenerated() {
  const trainProvider = useContext(trainContext)
  const { userTrain, train } = trainProvider
  // const [progress, setProgress] = useState(true)
  const wodRef = useRef(train)
  const [wod, setWod] = useState('')
  const [loading, setLoading] = useState(true)

  const { intensidad, objetivo, duracion, equipamiento } = train

  // useEffect(() => {
  //   setTimeout(() => {
  //     setProgress(false)
  //   }, 500)
  // }, [])

  useEffect(() => {
    if (!loading) return
    const fechData = async () => {
      // setLoading(true)
      if (wodRef.current.objetivo === undefined) return
      try {
        const result = await textGenerator(JSON.stringify(wodRef.current))
        // wodRef.current = result.choices[0].message.content
        setWod(result.choices[0].message.content)
        console.log()
        setLoading(false)
      } catch (err) {
        console.error('Un error ha ocurrido: ', err)
      }
    }
    fechData()
  }, [])

  return (
    <div className="flex h-screen  flex-col items-center md:justify-center gap-6 justify-center ">
      <div className="md:h-2/3 h-[100%]  py-4 rounded-xl shadow-2xl w-4/5 flex flex-col   items-center">
        <div className=" w-[90%] md:w-2/3 h-full grid gap-2 grid-rows-7 ">
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
            <Link
              to="/page-cero"
              className=" rounded-2xl text-sm  font-semibold rubik-md   bg-sambayon text-[#161714]  p-[10px] place-content-center text-center hover:border-white hover:border hover:text-white transition-all h-[40px] ease-in-out duration-100 cursor-pointer active:scale-95 w-[100px] "
            >
              Inicio
            </Link>
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
                <pre className="py-2 whitespace-pre-wrap    ">{wod}</pre>
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
