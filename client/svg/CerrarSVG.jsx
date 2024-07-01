function CerrarSVG() {
  return (
    <div className="flex flex-col gap-2 justify-center items-center  ">
      <svg
        className="cursor-pointer "
        id="Layer_1"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        width="20px"
        height="20px"
      >
        <path
          d="m23.473,16.247l-2.862,2.863-1.414-1.414,1.696-1.696h-6.892v-2h6.956l-1.76-1.761,1.414-1.414,2.862,2.862c.706.706.706,1.854,0,2.56Zm-9.473,1.753h2v5.999H0V4.199C0,2.775,1.014,1.538,2.411,1.258L8.412.057c.886-.174,1.793.051,2.491.622.428.351.728.812.908,1.319h1.19c1.654,0,3,1.346,3,3v7.001h-2v-7.001c0-.552-.449-1-1-1h-1v18h2v-3.999Zm-4.999-5.501c0-.829-.672-1.501-1.501-1.501s-1.501.672-1.501,1.501.672,1.501,1.501,1.501,1.501-.672,1.501-1.501Z"
          fill="#eee"
        />
      </svg>
      <span className="text-xs text-[#eee] ">Salir</span>
    </div>
  )
}

export default CerrarSVG
