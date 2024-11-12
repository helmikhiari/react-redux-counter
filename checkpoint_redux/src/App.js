import logo from './logo.svg';
import './App.css';
import AddTask from './addTask';
import Task from './task';
import TaskList from './taskList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddTask/>
        <TaskList/>
      </header>
    </div>
  );
}

export default App;
