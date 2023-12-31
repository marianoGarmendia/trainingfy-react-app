import { useFetch } from '../useFetch'

const url =
  'https://exercisedb.p.rapidapi.com/exercises/bodyPart/cardio?limit=5'

const PowerTrain = ({ trainGenerated }) => {
  const { powerModalidad, timePower } = trainGenerated

  const { data } = useFetch(url)
  const excercises = data?.slice(5, 8)

  const cantidadReps = () => {
    const multiplicador = Math.floor(Math.random() * 3 + 2)
    const num = Math.floor(Math.random() * 5 + 3)
    return num * multiplicador
  }

  return (
    <div className="text-center ">
      <h2 className="my-4 font-semibold text-lg">{powerModalidad}</h2>
      <h3 className="my-2 font-semibold">Amrap: {timePower} minutos</h3>

      <ul>
        {excercises ? (
          excercises.map((exc, index) => {
            return (
              <li key={index}>
                {exc.name} x {cantidadReps()} reps
              </li>
            )
          })
        ) : (
          <p>...Loading</p>
        )}
      </ul>
    </div>
  )
}

export default PowerTrain
