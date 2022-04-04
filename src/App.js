import './App.css';
import Signup from './Signup';
//import { app } from './Firebase.js';
//import AddTeacher from "./AddTeacher.js";
import {AuthProvider} from "./AuthContext";

function App() {
  return (
    <AuthProvider>

      <Signup />

    </AuthProvider>

  );
}

export default App;

