import Header from './components/Header'
import './App.css'
import PageInit from './components/PageInit'
import { Route, Routes } from 'react-router-dom'
import CardTrain from './components/CardTrain'
import TrainGenerated from './components/TrainGenerated'
import { useState } from 'react'

function App() {
  const [trainGenerated, setTrainGenerated] = useState({})
  fetch(`/.netlify/functions/fetch-excercises?name="marianodev"`)
    .then((res) => res.json())
    .then((response) => console.log(response))

  return (
    <>
      <Header />{' '}
      <Routes>
        <Route exact path="/" element={<PageInit />}></Route>
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
