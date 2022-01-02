import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  const tarefas = ['Lavar a louça', 'Arrumar o quarto', 'Instalar tomada'];
  return tarefas.map(Task);
}

export default App;
