import HighTrain from './HighTrain';
// import { useFetch } from '../useFetch';

const TrainGenerated = ({ train, trainGenerated, trainOk }) => {
  //   const { data } = useFetch();
  console.log('train generated');
  return (
    <>
      {train === 'High Intensity' ? (
        <HighTrain trainGenerated={trainGenerated} trainOk={trainOk} />
      ) : train === 'Crossfit' ? (
        <div className="text-center">
          <h2>{trainGenerated.crossModalidad}</h2>
          <p>OTM X 12 minutos</p>
          {/* <div>{data && console.log(data)}</div> */}
        </div>
      ) : null}
    </>
  );
};

export default TrainGenerated;
