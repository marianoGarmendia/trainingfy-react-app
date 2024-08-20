function Exercise({ exercise }) {
  const { nombre, series, repsPorSeries, peso, descanso } = exercise
  return (
    <div className="text-[#eee] flex flex-col items-center justify-center py-4 bg-[#161714] rounded-md my-2 gap-2">
      <div className="font-bold min-w-[40px] ">{nombre}</div>
      <div className="text-center">
        {series} x {repsPorSeries}
      </div>
      {/* <div className="">{repsPorSerie}</div> */}
      <div className="">{peso}</div>
      <div className="">Descanso: {descanso} e/ series</div>
    </div>
  )
}

export default Exercise
