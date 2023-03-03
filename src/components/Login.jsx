/* import { Alert } from 'bootstrap'; */
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from './Alert';


const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  /* const [error, setError] = useState(false) */

  console.log(email);
  console.log(password);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  };
  //Mensaje datos correcto/incorrectos
  //If, alert
  const submit = (e) => {
    e.preventDefault()
    if (email !== "hola@outlook.com" || password !== "12345") {
      alert("Datos erróneos 😞")
      return
    }
    alert("Sesión iniciada 👌")
  }

  return (
    <div className="container">
      <form
        onSubmit={submit}
        className="formulary">
        <h4>Desafío Componentes</h4>

        <Form.Group
          className="mb-3"
          controlId="formBasicEmail"
        >
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese su email"
            onChange={handleEmailChange}
          />

        </Form.Group>

        <Form.Group className="mb-3"
          controlId="formBasicPassword"
        >
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingrese su clave"
            onChange={handlePasswordChange}
          />

        </Form.Group>

        <Button
          id="send"
          disabled={!email || !password}
          className="button"
          type="submit"
          variant="dark"
        >Iniciar Sesión</Button>


      </form>

    </div>
  )
}

export default Login