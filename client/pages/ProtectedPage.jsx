import { Outlet, Navigate } from 'react-router-dom'
import { useUser } from '../context/UserContext'

function ProtectedPage(children) {
  const { user, loading } = useUser()

  if (!user && loading) {
    return <h1>Loading...</h1>
  } else if (!user && loading === false) {
    return <Navigate to="/" replace></Navigate>
  } else {
    return <Outlet></Outlet>
  }
}

export default ProtectedPage
