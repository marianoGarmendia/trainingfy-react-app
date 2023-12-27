import { useParams } from 'react-router-dom'
import HighTrain from './HighTrain'
// import { useFetch } from '../useFetch';

const TrainGenerated = () => {
  //   const { data } = useFetch();
  const { trainName } = useParams()
  const high = /High\s?Intensity/i
  const functional = /Functional/i
  const crossfit = /Crossfit/i
  const powerWoman = /Power\s?woman/i

  return (
    <>
      {high.test(trainName) && <HighTrain />}
      {functional.test(trainName) && <h1>Train funcional</h1>}
      {crossfit.test(trainName) && <h1>Train Crossfit</h1>}
      {powerWoman.test(trainName) && <h1>Train Power Woman</h1>}
    </>
  )
}

export default TrainGenerated
