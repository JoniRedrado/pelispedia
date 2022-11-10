//Libraries
import { Routes, Route } from "react-router-dom";

//Components
import Login from "./components/Login";
import Listado from "./components/Listado";
import Detalle from "./components/Detalle";
import Header from "./components/Header";
import Footer from "./components/Footer";

//styles
import './css/bootstrap.min.css'

function App() {
  return (
    <>
      <Header />
      <div className="container mt-3">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/listado" element={<Listado />} />
          <Route path="/detalle" element={<Detalle />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
