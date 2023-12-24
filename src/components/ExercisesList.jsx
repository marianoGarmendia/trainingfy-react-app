const ExerciseList = ({ core, onChangeProp }) => {
  return (
    <>
      {core && (
        <div className="w-full m-4 mx-auto">
          <p className="text-center p-2">Cantidad de ejercicios en el bloque</p>
          <select
            className="bg-customInterior text-gray-100 border border-gray-300 p-2 rounded-md w-full mx-auto
            focus:ring-sambayon focus:border-sambayon"
            id=""
            onChange={onChangeProp}
          >
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
      )}
    </>
  );
};

export default ExerciseList;
