import logo from './logo.svg';
import './App.scss';
import Mycomponment from "./Example/Mycomponents"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Hello wolrd with ReactJS (Hoi dan IT)
        </p>
        
        <Mycomponment/>
      </header>
    </div>
  );
}

export default App;
