import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import './index.css'
import { HashRouter } from 'react-router-dom'
import { TrainProvider } from './context/TrainProvider.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <TrainProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </TrainProvider>
)
