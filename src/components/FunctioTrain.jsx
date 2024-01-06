import { useFetch } from '../useFetch'
const url =
  'https://exercisedb.p.rapidapi.com/exercises/bodyPart/cardio?limit=29'

const FunctioTrain = ({ trainGenerated }) => {
  const {
    timefirstBlFunctio,
    cantidadExcercisesFirstBlFunctio,
    timeSecondBlFunctio,
    cantidadExcercisesSecondBlFunctio,
  } = trainGenerated

  const { data } = useFetch(url)

  const cantidadReps = (cantidad) => {
    const num = Math.floor(Math.random() * 5) + 3
    return num * cantidad
  }

  const excercises = (endIndex) => {
    const num = Math.floor(Math.random() * 23)
    return data?.slice(num, num + endIndex)
  }

  const cantExcerFirstBl = excercises(cantidadExcercisesFirstBlFunctio)
  const cantExcerSecondBl = excercises(cantidadExcercisesSecondBlFunctio)

  return (
    <div className="text-center">
      <h3 className="my-2 font-semibold text-md">
        Amrap de {timefirstBlFunctio}
      </h3>
      <ul>
        {cantExcerFirstBl ? (
          cantExcerFirstBl.map((exc, index) => {
            return (
              <li key={index}>
                {exc.name} x {cantidadReps(cantidadExcercisesFirstBlFunctio)}
              </li>
            )
          })
        ) : (
          <p>...Loading</p>
        )}
      </ul>
      <h3 className="my-4 font-semibold text-md">
        Amrap de {timeSecondBlFunctio}
      </h3>
      <ul>
        {cantExcerSecondBl ? (
          cantExcerSecondBl.map((exc, index) => {
            return (
              <li key={index}>
                {exc.name} x {cantidadReps(cantidadExcercisesSecondBlFunctio)}
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

export default FunctioTrain
