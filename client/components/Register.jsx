import { Link, useNavigate } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import validateregister from '../helpers/validateRegister'
import MessageRegister from './MessageRegister'
import { useUser } from '../context/UserContext.jsx'

function Register() {
  const navigate = useNavigate()
  const { addUser, setUser } = useUser()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const userToRegister = useRef(null)
  const [statusRegister, setStatusRegister] = useState(null)
  const [responserRegister, setResponseRegister] = useState(null)

  const [responseFetch, setResponseFetch] = useState(null)

  const [infoRegister, setInfoRegister] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    userToRegister.current = { email, password }
    try {
      const responseRegister = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/register`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userToRegister.current),
          credentials: 'include',
        }
      )
      const res = await responseRegister.json()

      const registerValidation = validateregister(res)

      if (registerValidation.message) {
        setResponseFetch({ registerValidation, res })
      } else {
        registerValidation.user.displayName = displayName
        const resAddUser = await addUser(registerValidation)
        const { user } = registerValidation
        setResponseRegister(user)
        setStatusRegister(resAddUser.status)
      }
    } catch (error) {
      console.log(error)
    }
  }

  // Evalua la respuesta al backend - si hay errores o si llego la credencial de usuario hace una u otra accion
  useEffect(() => {
    if (responseFetch) {
      const { registerValidation } = responseFetch

      const message = registerValidation.message
      setInfoRegister(message)

      setTimeout(() => {
        setInfoRegister(null)
      }, 2000)
    }
  }, [responseFetch])

  useEffect(() => {
    if (!statusRegister) return
    if (statusRegister === 200) {
      setUser(responserRegister)
      setEmail('')
      setPassword('')
      navigate('/presentacion')
    }
  }, [statusRegister, responserRegister])

  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="backdrop-blur-sm border-[4px] border-sambayon rounded-2xl  transition-all duration-200">
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="relative mx-auto flex items-center space-y-4 py-10 px-12 font-semibold text-gray-500 flex-col"
          >
            <h1 className="text-white text-2xl">
              Registrate en <span className="text-sambayon">Trainingfy</span>
            </h1>

            <input
              required
              className="w-full p-2 bg-sambayon/90  text-custombg placeholder:text-custombg rounded-md border border-customInterior focus:border-white hover:border-white transition-all duration-200"
              placeholder="Correo@..."
              type="Email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
            <input
              type="text"
              required
              className="w-full p-2 bg-sambayon/90  text-custombg placeholder:text-custombg rounded-md border border-customInterior focus:border-white hover:border-white transition-all duration-200"
              placeholder="nombre de usuario"
              value={displayName}
              onChange={(e) => {
                setDisplayName(e.target.value)
              }}
            />
            <input
              required
              className="w-full p-2 bg-sambayon/90  text-custombg placeholder:text-custombg rounded-md border border-customInterior focus:border-white hover:border-white transition-all duration-200"
              placeholder="*********"
              type="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
            <button
              className="w-full p-2 bg-gray-50 rounded-full active:scale-95 cursor-pointer font-bold text-custombg border-[2px] border-custombg hover:border-sambayon transition-all duration-200"
              type="submit"
              id=""
            >
              Registrate{' '}
            </button>
            <p>
              Ya tenés cuenta?
              <Link
                className="font-semibold text-white hover:text-sambayon   transition-all duration-200"
                to="/login"
              >
                {' '}
                Inicia sesión
              </Link>
            </p>
            {infoRegister !== '' && (
              <MessageRegister message={infoRegister}></MessageRegister>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
