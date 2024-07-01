function Items({ children, title }) {
  return (
    <div className="flex flex-col items-center justify-between  z-11 text-[#161714] p-2">
      <span className="text-xs text-center  pb-[5px]">{title}</span>
      {children}
    </div>
  )
}

export default Items
