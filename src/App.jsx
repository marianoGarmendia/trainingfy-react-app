import Header from './components/Header'
import './App.css'
import PageInit from './components/PageInit'
import { Route, Routes } from 'react-router-dom'
import CardTrain from './components/CardTrain'
import TrainGenerated from './components/TrainGenerated'
import { useState } from 'react'
import HomePage from './components/HomePage'
import Register from './components/Register'

function App() {
  const [trainGenerated, setTrainGenerated] = useState({})

  // console.log(process.env.VITE_REACT_APP_API_KEY)
  return (
    <>
      <Header />{' '}
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
        <Route exact path="/train" element={<PageInit />}></Route>
        <Route
          exact
          path="/:trainName"
          element={
            <CardTrain
              setTrainGenerated={setTrainGenerated}
              trainGenerated={trainGenerated}
            />
          }
        >
          <Route
            path="generatedTrain"
            element={
              <TrainGenerated trainGenerated={trainGenerated}></TrainGenerated>
            }
          ></Route>
        </Route>
        {/* <Route exact path="/train/:trainName" element={<TrainGenerated />}></Route> */}
      </Routes>
    </>
  )
}

export default App
