import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = ['fifa', 'jogar', 'the last of us', 'god of war'];
 
function loop() {
  return compromissos.map((item) => Task(item))
}

function App() {
  return (
    loop()
  );
}

export default App;
