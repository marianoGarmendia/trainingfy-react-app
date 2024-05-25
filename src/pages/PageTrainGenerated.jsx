import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
// import { trainContext } from '../context/TrainProvider'
import { textGenerator } from '../helpers/textGeneretor'
import Loading from '../components/Loading'
import BarProgress from '../components/BarProgress'
import svgFitness from '../image/aplicacion-de-fitness.png'

function PageTrainGenerated({ workout }) {
  // const trainProvider = useContext(trainContext)
  const [progress, setProgress] = useState(true)
  const wodRef = useRef(workout)
  const [wod, setWod] = useState('')
  const [loading, setLoading] = useState(false)

  // const { train } = trainProvider

  useEffect(() => {
    setTimeout(() => {
      setProgress(false)
    }, 500)
  }, [])

  const fechData = async () => {
    setLoading(true)
    if (wodRef.current.objetivo === undefined) return
    try {
      const result = await textGenerator(JSON.stringify(wodRef.current))
      // wodRef.current = result.choices[0].message.content
      setWod(result.choices[0].message.content)
      setLoading(false)
    } catch (err) {
      console.error('Un error ha ocurrido: ', err)
    }
  }

  return (
    <section className="flex  flex-col items-center md:justify-around    h-2/3">
      {wod !== '' && (
        <Link
          to="/presentacion"
          className="px-8 py-4 border hover:bg-sambayon hover:text-custombg transition-all ease-in-out duration-200 active:scale-95 border-sambayon backdrop-blur-md text-sambayon mb-4 font-bold tracking-wide text-xl rounded-md "
        >
          Volver a Inicio ⬅️
        </Link>
      )}
      <button
        onClick={fechData}
        className={
          loading || wod !== ''
            ? 'hidden'
            : 'px-8 py-4 border hover:bg-sambayon hover:text-custombg transition-all ease-in-out duration-200 active:scale-95 border-sambayon backdrop-blur-md text-sambayon mb-4 font-bold tracking-wide text-xl rounded-md '
        }
      >
        Click para ver tu entrenamiento ⭐
      </button>
      {wod ? (
        <div className=" h-[420px] md:h-[350px] border border-sambayon rounded-md text-center font-semibold tracking-wide backdrop-blur-sm w-[90%] md:w-2/3 p-6 overflow-y-scroll scrollable">
          <pre className=" whitespace-pre-wrap font-mono">{wod && wod}</pre>
        </div>
      ) : (
        loading && <Loading>{svgFitness}</Loading>
      )}
      {progress && <BarProgress progress={100}></BarProgress>}
    </section>
  )
}

export default PageTrainGenerated
