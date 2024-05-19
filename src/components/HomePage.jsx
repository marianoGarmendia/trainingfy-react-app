import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="bg-custombg border-[4px] border-sambayon rounded-2xl  transition-all duration-200">
          <div className="mx-auto flex items-center space-y-4 py-16 px-12 font-semibold text-gray-500 flex-col">
            <h1 className="text-white text-2xl">
              Ingresa a <span className="text-sambayon">Trainingfy</span>
            </h1>
            <input
              className="w-full p-2 bg-sambayon/90  text-custombg placeholder:text-custombg rounded-md border border-customInterior focus:border-white hover:border-white transition-all duration-200"
              placeholder="Email"
              type="email"
              name="email"
              id=""
            />
            <input
              className="w-full p-2 bg-sambayon/90 text-custombg placeholder:text-custombg rounded-md border border-customInterior focus:border-white hover:border-white transition-all duration-200"
              placeholder="Password"
              type="password"
              name="password"
              id=""
            />
            <input
              className="w-full p-2 bg-gray-50 rounded-full active:scale-95 cursor-pointer font-bold text-custombg border-[2px] border-custombg hover:border-sambayon transition-all duration-200"
              type="submit"
              id=""
            />
            <p>
              No tenés cuenta?
              <Link
                className="font-semibold text-white hover:text-sambayon   transition-all duration-200"
                to="/register"
              >
                {' '}
                Registrate
              </Link>
            </p>
            <Link
              to="/train"
              className="bg-customInterior p-2 rounded-md hover:bg-sambayon"
            >
              Entrá sin registrarte
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
