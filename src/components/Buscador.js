import swAlert from "@sweetalert/with-react";


function Buscador () {

  const submitHandler = e => {
    e.preventDefault();
    const keyword = e.currentTarget.keyword.value;
    console.log(keyword);
    if (keyword.length === 0) {
      swAlert(<h5>Debes escribir una palabra clave para continuar...</h5>)
    }
  }

  return (
    <form className="d-flex align-items-center" onSubmit={submitHandler}>

        <label className="form-label mb-0 mx-2">
          <input className="form-control" type="text" name="keyword" placeholder="Buscar..."/>
        </label>  
        <button className="btn btn-success mx-2" type="submit">Buscar</button>
      </form>
  )
};


export default Buscador;