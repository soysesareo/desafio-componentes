import { useState } from 'react'
import './App.css'
import Alert from './components/Alert'
import Login from './components/Login'

//Profesor, no logré implementar el punto 5 del desafío, dejé comentado parte de lo que hice (componente y props) por si alcanzo algo de puntaje. Sin embargo, igual se muestra un mensaje al iniciar sesión (usé un If/alert). Por favor, cuando esta tarea sea revisada agradeceré me indique cómo se resuelve este punto. Gracias.


function App() {
  const [error, setError] = useState(false);

  return (
    <div className="App">
      <Login />
      <br />

      {/* <Alert
      text="Datos Erróneos"
      color="danger"
      /> */}
      {/* <Alert
      text="Sesión Iniciada"
      color="dark"
      /> */}
    </div>
  )
}

export default App
