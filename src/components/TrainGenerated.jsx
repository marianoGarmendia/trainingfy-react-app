import { useParams } from 'react-router-dom'
import HighTrain from './HighTrain'
import CrossTrain from './CrossTrain'
import FunctioTrain from './FunctioTrain'
import PowerTrain from './PowerTrain'

const TrainGenerated = ({ trainGenerated }) => {
  const { trainName } = useParams()
  const high = /High\s?Intensity/i
  const functional = /Functional/i
  const crossfit = /Crossfit/i
  const powerWoman = /Power\s?woman/i

  return (
    <>
      {high.test(trainName) && <HighTrain trainGenerated={trainGenerated} />}
      {functional.test(trainName) && (
        <FunctioTrain trainGenerated={trainGenerated} />
      )}
      {crossfit.test(trainName) && (
        <CrossTrain trainGenerated={trainGenerated} />
      )}
      {powerWoman.test(trainName) && (
        <PowerTrain trainGenerated={trainGenerated} />
      )}
    </>
  )
}

export default TrainGenerated
