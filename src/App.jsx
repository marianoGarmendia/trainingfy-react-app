import Header from './components/Header';
import './App.css';
import LabelTrain from './components/LabelTrain';

function App() {
  return (
    <>
      <Header />
      <div>
        <LabelTrain>High Intensity</LabelTrain>
        <LabelTrain>Functional</LabelTrain>
        <LabelTrain>Crossfit</LabelTrain>
        <LabelTrain>Power Woman</LabelTrain>
      </div>
    </>
  );
}

export default App;
