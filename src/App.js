import logo from './logo.svg';
import './App.css';

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
            Добавления в разметку объекта style
        </li>
          <li className="App__item">вывод значения переменной: num = {num}</li>
          <li className="App__item">вывод числа: {9}</li>
          <li className="App__item">вывод результата арифметической операции: {365 - (30 * 3)}</li>
          <li className="App__item">вывод результата логической операции: {logic && "Logical operation"}</li>
          <li className="App__item">использование тернарного условия: {tern ? "\"tern\" is true" : "\"tern\" is false"}</li>
          <li className="App__item">вывод undefined, null, false и true: {undefined} {null} {false} {true}</li>
        </ul>
      </header>
    </div>
  );
}

export default App;