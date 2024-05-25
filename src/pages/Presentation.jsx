import { Link } from 'react-router-dom'

function Presentacion() {
  return (
    <div className="text-center tracking-wide w-2/3 mx-auto px-10">
      <h1>TrainingFy es una app que soluciona tu entrenamiento</h1>
      <p>
        Olvidate de esos dias donde no sabes que entrenar y te aburre la rutina
      </p>
      <p>
        Respondiendo solo una preguntas Training
        <span className="text-sambayon font-bold">Fy</span> arma tu
        entrenamiento ideal según tu objetivo del dia{' '}
      </p>
      <Link to="/page-cero">
        <button className="px-8 py-4 border hover:bg-sambayon hover:text-custombg transition-all ease-in-out duration-200 active:scale-95 border-sambayon backdrop-blur-md text-sambayon my-8 font-bold tracking-wide text-2xl rounded-md">
          Empezar
        </button>
      </Link>
    </div>
  )
}

export default Presentacion
