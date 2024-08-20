import Exercise from './Exercises'

function WodFormatted({ wod }) {
  const { tiempo, modalidad, ejercicios } = wod

  return (
    <div className="p-4 bg-sambayon text-customInterior font-semibold rounded-md">
      <h2>{modalidad}</h2>
      <span className="pb-4">Tiempo de entrenamiento: {tiempo} minutos</span>
      <h3 className="pb-4">Workout:</h3>

      {ejercicios.map((ejercicio, idx) => {
        return <Exercise key={idx} exercise={ejercicio}></Exercise>
      })}
    </div>
  )
}

export default WodFormatted
