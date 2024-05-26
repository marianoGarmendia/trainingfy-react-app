import Header from './components/Header'

import { Route, Routes } from 'react-router-dom'
import { useContext } from 'react'
import { trainContext } from './context/TrainProvider'
import HomePage from './components/HomePage'
// import Register from './components/Register'
import Presentacion from './pages/Presentation'
import PageCero from './pages/PageCero'
import PageUno from './pages/PageUno'
import PageTwo from './pages/PageTwo'
import PageThree from './pages/PageThree'
import PageFour from './pages/PageFour'
import PageTrainGenerated from './pages/PageTrainGenerated'

function App() {
  const trainProvider = useContext(trainContext)
  const { train } = trainProvider

  return (
    <div className=" h-screen">
      <Header />{' '}
      <div>
        <img src="" alt="" />
      </div>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/presentacion" element={<Presentacion />}></Route>
        {/* <Route exact path="/register" element={<Register />}></Route> */}

        <Route exact path="/page-cero" element={<PageCero />}></Route>
        <Route exact path="/page-one" element={<PageUno />}></Route>
        <Route exact path="/page-two" element={<PageTwo />}></Route>
        <Route exact path="/page-three" element={<PageThree />}></Route>
        <Route exact path="/page-four" element={<PageFour />}></Route>
        <Route
          exact
          path="/page-trainGenerated"
          element={<PageTrainGenerated workout={train} />}
        ></Route>
      </Routes>
    </div>
  )
}

export default App
