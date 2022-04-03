import './App.css';
import { app } from './Firebase';
import AddTeacher from "./AddTeacher";

function App() {
  return (
    <AddTeacher firebase={app}/>
  );
}

export default App;

