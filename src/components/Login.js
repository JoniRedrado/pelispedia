import axios from "axios";
import swAlert from "@sweetalert/with-react";
import { useNavigate, Navigate } from "react-router-dom";

function Login () {

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    
    const email = e.target.email.value;
    const password = e.target.password.value;
    const regexEmail =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if ( email === '' || password === '' ) {
      swAlert(
        <h2>Los campos no pueden estar vacios!</h2>
      );
      return
    };

    if ( email !== '' && !regexEmail.test(email) ) {
      swAlert(
        <h2>Debes ecribir un correo electrónico valido!</h2>
      );
      return
    }

    if ( email !== 'challenge@alkemy.org' || password !== 'react' ) {
      swAlert(
        <h2>Credenciales inválidas</h2>
      );
      return
    }

    console.log("Listos para enviar la información");


    axios
      .post('http://challenge-react.alkemy.org', { email, password })
      .then(res=> {
        swAlert(
          <h2>Estas loggeado!</h2>
        );
        console.log(res.data);
        const token = res.data.token;
        localStorage.setItem( 'token', token );
        navigate("/listado")
      })
  }

  let token = localStorage.getItem('token');

  return (
    <> 

      { token && <Navigate to="/listado" /> }

      <h2>Formulario de login</h2>
      <form onSubmit={submitHandler}>

        <label>
          <span>Correo electronico:</span> <br />
          <input type="email" name="email" />
        </label>  
        <br />

        <label>
          <span>Contraseña:</span> <br />
          <input type="password" name="password" />
        </label>  

        <br />
        <button type="submit">Ingresar</button>
      </form>
      <h5>Credenciales</h5>
        <p>challenge@alkemy.org</p>
        <p>react</p>
    </>
  )
}

export default Login;