import { Link, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { validateLogin } from '../helpers/validateLogin'
import MessageRegister from './MessageRegister'
import CircularWithValueLabel from './ProgressLoading.jsx'
import { useUser } from '../context/UserContext.jsx'
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

function Login() {
  const { user, getUser, loading, setLoading } = useUser()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [isLoading, setIsloading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const responseRegister = await fetch(`${BACKEND_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
      credentials: 'include',
    })

    const res = await responseRegister.json()
    const responseValidate = validateLogin(res)

    if (responseValidate.error) {
      setError(responseValidate.message)
    } else {
      const { user } = responseValidate
      getUser({ id: user.uid })
    }
  }

  // Evalua la respuesta al backend - si hay errores o si llego la credencial de usuario hace una u otra accion
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(null)
      }, 2000)
    }
  }, [error])

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <CircularWithValueLabel></CircularWithValueLabel>
      </div>
    )
  }
  return (
    <>
      {user ? (
        <Navigate to="/presentacion"></Navigate>
      ) : (
        <div className=" backdrop-blur-sm border-[4px] border-sambayon rounded-2xl  transition-all duration-200">
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="mx-auto flex items-center space-y-4 py-10 px-12 font-semibold text-gray-500 flex-col"
          >
            <h1 className="text-white text-2xl">
              Ingresa a <span className="text-sambayon">Trainingfy</span>
            </h1>
            <input
              className="w-full p-2 bg-sambayon/90  text-custombg placeholder:text-custombg rounded-md border border-customInterior focus:border-white hover:border-white transition-all duration-200"
              placeholder="Email"
              required
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
            <input
              className="w-full p-2 bg-sambayon/90 text-custombg placeholder:text-custombg rounded-md border border-customInterior focus:border-white hover:border-white transition-all duration-200"
              placeholder="******"
              type="password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
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
                to="/signUp"
              >
                {' '}
                Registrate
              </Link>
            </p>
            {error && <MessageRegister message={error}></MessageRegister>}
          </form>
        </div>
      )}
    </>
  )
}

export default Login
