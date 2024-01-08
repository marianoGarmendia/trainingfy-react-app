import { useFetch } from '../useFetch'
const url =
  'https://exercisedb.p.rapidapi.com/exercises/bodyPart/cardio?limit=29'

const CrossTrain = ({ trainGenerated }) => {
  const { crossModalidad, wodModalidad, crossTime } = trainGenerated

  const { data } = useFetch(url)

  const cantidadReps = (num) => {
    return num * Math.floor(Math.random() * 5 + 3)
  }

  const excercises = (endIndex) => {
    const num = Math.floor(Math.random() * 23)
    return data?.slice(num, num + endIndex)
  }

  const excercisesFirsBl = excercises(3)

  // Para usar sin hacer pedidos a la api
  //   excercisesFirsBl &&
  //     localStorage.setItem('data', JSON.stringify(excercisesFirsBl))

  //   const excercisesFirsBl = JSON.parse(localStorage.getItem('data'))

  return (
    <>
      <div className="text-center my-4">
        <h2 className="font-bold text-lg">{crossModalidad}</h2>
        <h3 className="my-2 font-semibold ">
          {wodModalidad.includes('Por rondas') ? '5 rounds' : wodModalidad}
        </h3>
        <h3 className="font-semibold my-3">Tiempo: {crossTime} </h3>
        <ul>
          {excercisesFirsBl ? (
            excercisesFirsBl.map((exc, index) => {
              return (
                <li key={index}>
                  {exc.name} x {cantidadReps(3)} reps
                </li>
              )
            })
          ) : (
            <p>...Loading</p>
          )}
        </ul>
      </div>
    </>
  )
}

export default CrossTrain
