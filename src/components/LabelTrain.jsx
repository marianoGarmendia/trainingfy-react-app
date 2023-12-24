import { useState } from 'react';
import CardTrain from './CardTrain';

const LabelTrain = ({ children }) => {
  const [card, setCard] = useState(false);
  const [train, setTrain] = useState('');

  return (
    <>
      {card ? (
        <CardTrain train={train} setCard={setCard} />
      ) : (
        <div
          className="bg-customInterior p-4 rounded-md mx-4 md:w-1/2 md:mx-auto my-4 flex justify-between hover:bg-sambayon hover:text-customInterior "
          onClick={() => {
            setTrain(children);
            setCard(true);
          }}
        >
          <p>{children}</p>
          <img src="src/assets/angulo-derecho.svg" className="w-4" alt="" />
        </div>
      )}
    </>
  );
};

export default LabelTrain;
