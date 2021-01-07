import logo from './logo.svg';
import './App.css';
import { count, length } from "./number"

const num = 8;
const logic = true;
const tern = false;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul className="App__list">
          <li className="App__item" style={{
            color: "violet"
          }}>
            Подключи переменные в файле src/App.js и выведи их произведение в разметку.
          </li>
          <li className="App__item">
            count * length = {count * length}
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;