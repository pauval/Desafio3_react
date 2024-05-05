import React, { useState } from "react";
import Listado from "./componentes/Listado";
import Formulario from "./componentes/Formulario";
import Buscador from "./componentes/Buscador";
import Alert from "./componentes/Alert";
import { BaseColaboradores } from "./BaseColaboradores";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [filtroColaboradores, setFiltroColaboradores] = useState(BaseColaboradores);
  const [alerta, setAlerta] = useState({ mensaje: "", tipo: "" });

  const agregarColaborador = (nuevoColaborador) => {
    if (
      !nuevoColaborador.nombre ||
      !nuevoColaborador.correo ||
      !nuevoColaborador.edad ||
      !nuevoColaborador.cargo ||
      !nuevoColaborador.telefono
    ) {
      setAlerta({ mensaje: "Por favor complete todos los campos.", tipo: "danger" });
      return;
    }

    const ultimoId = colaboradores.length > 0 ? colaboradores[colaboradores.length - 1].id : 0;
    const id = parseInt(ultimoId) + 1;

    const nuevoConId = { ...nuevoColaborador, id };
    setColaboradores([...colaboradores, nuevoConId]);
    setFiltroColaboradores([...colaboradores, nuevoConId]);
    setAlerta({ mensaje: "Colaborador agregado exitosamente.", tipo: "success" });
  };

  const buscarColaborador = (termino) => {
    console.log("Buscar colaborador con el término:", termino);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-sm-12">
          <Buscador colaboradores={colaboradores} setFiltroColaboradores={setFiltroColaboradores} /> 
          <Listado colaboradores={filtroColaboradores} />
        </div>
        <div className="col-md-4 col-sm-12">
          <Formulario onAgregar={agregarColaborador} setAlerta={setAlerta} colaboradores={colaboradores} />
          <div className="mt-3">
            <Alert mensaje={alerta.mensaje} tipo={alerta.tipo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;


