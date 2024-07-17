import { Outlet, Navigate } from 'react-router-dom'
import { useUser } from '../context/UserContext'
import CircularWithValueLabel from '../components/ProgressLoading'

function ProtectedPage(children) {
  const { user, loading } = useUser()

  if (!user && loading) {
    return (
      <div className="w-full h-[100dvh] flex justify-center items-center">
        <CircularWithValueLabel></CircularWithValueLabel>
      </div>
    )
  } else if (!user && loading === false) {
    return <Navigate to="/" replace></Navigate>
  } else {
    return <Outlet></Outlet>
  }
}

export default ProtectedPage
