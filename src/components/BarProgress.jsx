import { useContext, useEffect } from 'react'
import { trainContext } from '../context/TrainProvider'

function BarProgress({ progress }) {
  const trainProvider = useContext(trainContext)
  const { filled, setFilled } = trainProvider

  useEffect(() => {
    if (filled <= 100 && filled >= 0) {
      if (filled > progress) {
        setTimeout(() => {
          setFilled((prevFilled) => {
            return prevFilled - 2
          })
        }, 50)
      } else if (filled < progress) {
        setTimeout(() => {
          setFilled((prevFilled) => {
            return prevFilled + 2
          })
        }, 50)
      }
    }
  }, [filled])
  return (
    <div className="w-2/5 mx-auto ">
      <p className="text-center text-sm text-sambayon m-1">{filled + '%'}</p>
      <div className="h-2 rounded-lg mx-auto bg-white">
        <div
          className=" h-full bg-sambayon rounded-lg"
          style={{ width: `${filled}%` }}
        ></div>
      </div>
    </div>
  )
}

export default BarProgress
