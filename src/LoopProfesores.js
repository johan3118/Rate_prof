import { app } from './Firebase.js';
import { getDatabase, ref, set } from "firebase/database";
import { v4 as uuidv4 } from 'uuid';
import { listaProfesoresArea } from './ListaProfesores.js';
/// import { string } from 'yargs';

const db = getDatabase(app)

for (const listaProfesores of listaProfesoresArea) {
  const { area, profesores } = listaProfesores
  
  for (const nombres of profesores) {
    const profesorId = uuidv4()
    // set send data to firebase
    // ref set id
    set(ref(db, 'profesores/' + profesorId), {nombres, area});
    console.log(`se agrego a ${nombres} de ${area}`)
  }
}

console.log('Se Termino con Exito')