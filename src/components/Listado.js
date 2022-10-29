import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Listado () {

  const navigate = useNavigate();
  useEffect(() => {
    
    const token = localStorage.getItem('token');
    
    if (token === null) {
      console.log(token);
      navigate("/")
    }
  }, []);



  return (
    <h2>Soy el componente Listado</h2>
  )
}

export default Listado