import React, { useState } from "react";

const Buscador = ({ colaboradores, setFiltroColaboradores }) => {
  const [busqueda, setBusqueda] = useState("");

  const handleChange = (e) => {
    const term = e.target.value.toLowerCase(); 
    setBusqueda(term);
    const filtrados = colaboradores.filter(colaborador =>
      colaborador.nombre.toLowerCase().includes(term) || 
      colaborador.correo.toLowerCase().includes(term) ||
      colaborador.edad.toString().includes(term) ||
      colaborador.cargo.toLowerCase().includes(term) ||
      colaborador.telefono.includes(term)
    );
    setFiltroColaboradores(filtrados);
  };

  return (
    <div className="container mt-4">
      <h2>Buscar Colaborador</h2>
      <input
        type="text"
        className="form-control"
        placeholder="Buscar colaborador..."
        value={busqueda}
        onChange={handleChange}
      />
    </div>
  );
};

export default Buscador;

