import { Link } from 'react-router-dom'
function Register() {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="backdrop-blur-sm border-[4px] border-sambayon rounded-2xl  transition-all duration-200">
          <div className="mx-auto flex items-center space-y-4 py-10 px-12 font-semibold text-gray-500 flex-col">
            <h1 className="text-white text-2xl">
              Registrate en <span className="text-sambayon">Trainingfy</span>
            </h1>
            <input
              className="w-full p-2 bg-sambayon/90  text-custombg placeholder:text-custombg rounded-md border border-customInterior focus:border-white hover:border-white transition-all duration-200"
              placeholder="Nombre"
              type="text"
              name="nombre"
              id=""
            />
            <input
              className="w-full p-2 bg-sambayon/90  text-custombg placeholder:text-custombg rounded-md border border-customInterior focus:border-white hover:border-white transition-all duration-200"
              placeholder="Apellido"
              type="text"
              name="apellido"
              id=""
            />
            <input
              className="w-full p-2 bg-sambayon/90  text-custombg placeholder:text-custombg rounded-md border border-customInterior focus:border-white hover:border-white transition-all duration-200"
              placeholder="Correo@..."
              type="Email"
              name="email"
              id=""
            />
            <input
              className="w-full p-2 bg-gray-50 rounded-full active:scale-95 cursor-pointer font-bold text-custombg border-[2px] border-custombg hover:border-sambayon transition-all duration-200"
              type="submit"
              id=""
            />
            <p>
              ¿Ya tenés cuenta?
              <Link
                className="font-semibold text-white hover:text-sambayon transition-all duration-200"
                to="/"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
