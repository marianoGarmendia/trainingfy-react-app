import { Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'

import Presentacion from './pages/Presentation'
import PageCero from './pages/PageCero'
import PageUno from './pages/PageUno'
import PageTwo from './pages/PageTwo'
import PageThree from './pages/PageThree'
import PageFour from './pages/PageFour'
import PageTrainGenerated from './pages/PageTrainGenerated'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProtectedPage from './pages/ProtectedPage'
import Profile from './pages/Profile'

function App() {
  return (
    <div className=" place-content-center w-full h-screen rubik-regular text-[#eee]">
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/login" element={<LoginPage />}></Route>
        <Route exact path="/signUp" element={<RegisterPage />}></Route>

        <Route element={<ProtectedPage />}>
          <Route exact path="/presentacion" element={<Presentacion />}></Route>
          {/* <Route exact path="/signUp"></Route> */}
          <Route exact path="/page-cero" element={<PageCero />}></Route>
          <Route exact path="/page-one" element={<PageUno />}></Route>
          <Route exact path="/page-two" element={<PageTwo />}></Route>
          <Route exact path="/page-three" element={<PageThree />}></Route>
          <Route exact path="/page-four" element={<PageFour />}></Route>
          <Route
            exact
            path="/page-trainGenerated"
            element={<PageTrainGenerated />}
          ></Route>
          <Route exact path="/profile" element={<Profile />}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
