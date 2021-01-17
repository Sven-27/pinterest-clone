import './App.css';
import Header from './Header'
import Mainboard from './Mainboard'

function App() {
  let pins = []
  return (
    <div className="app">
      <div className="app__header">
      <Header />
      </div>
      <div className="app__body">
        <Mainboard />
      </div>
    </div>
  );
}

export default App;
