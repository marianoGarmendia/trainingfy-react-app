import SetTrain from './SetTrain';

const CardTrain = ({ train, setCard }) => {
  // const [trainGenerated, setTrainGenerated] = useState({});
  // const [trainOk, setTrainOk] = useState(false);

  const backPage = () => {
    setCard(false);
    // setTrainOk(false);
  };
  return (
    <div className="bg-customInterior rounded-md p-4 md:w-2/3  md:mx-auto mx-4  my-4 flex flex-col">
      <div className="flex mb-5">
        <img
          src="src/assets/angulo-izquierdo.svg"
          className="w-4"
          alt=""
          onClick={() => {
            backPage();
          }}
        />
        <p className="p-2 font-semibold text-lg mx-auto ">{train}</p>
      </div>

      <SetTrain train={train} />
    </div>
  );
};

export default CardTrain;
