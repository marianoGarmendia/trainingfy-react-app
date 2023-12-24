import React from "react";

const SubmitBtn = () => {
  return (
    <div className="flex justify-center my-12">
      <input
        type="submit"
        value="Generar entrenamiento"
        className={`w-2/3 py-3 px-5 text-sambayon  bg-custombg border-sambayon border-2 rounded-sm active:text-white active:scale-105 active:border-2 active:border-white`}
      />
    </div>
  );
};

export default SubmitBtn;
