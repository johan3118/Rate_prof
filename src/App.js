import './App.css';
import { app } from './Firebase.js';
import AddTeacher from "./AddTeacher.js";

function App() {
  return (
    <AddTeacher firebase={app}/>
  );
}

export default App;

