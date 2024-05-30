import { Link } from 'react-router-dom'
import { trainContext } from '../context/TrainProvider'
import { useContext } from 'react'

function HomePage() {
  const { userTrain, setUserTrain } = useContext(trainContext)

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className="w-full h-full place-content-center flex flex-col items-center home">
      <div className="flex w-full h-[80%] items-center justify-between flex-col  gap-5  ">
        <p className="text-xs">
          <span className="text-sambayon">By</span> marianoDev
          <span className="text-sambayon">.</span>
        </p>
        <div className="w-[80%] md:w-[40%] gap-5 flex flex-col items-center ">
          <div>
            <h1 className="text-4xl font-extrabold">
              Training<span className="text-sambayon">Fy.</span>{' '}
            </h1>
            <p className="opacity-70">
              Generá entrenamientos con{' '}
              <span className="text-sambayon">IA</span>
            </p>
          </div>
          <form
            className="flex flex-col w-full gap-3"
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              type="text"
              className="rounded-2xl  text-center bg-customInterior placeholder:text-center placeholder:text-sm placeholder:font-semibold p-[10px]"
              placeholder="ingresá tu nombre"
              required={true}
              value={userTrain}
              onChange={(e) => {
                setUserTrain(e.target.value)
              }}
            />
            <Link
              to="/presentacion"
              className="rounded-2xl text-center  bg-sambayon text-customInterior   active:scale-95 transition-all ease-in-out text-sm font-semibold"
            >
              <button
                type="submit"
                className="rounded-2xl text-center  bg-sambayon text-customInterior  p-[10px] active:scale-95 transition-all ease-in-out text-sm font-semibold"
              >
                Ingresar
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default HomePage
