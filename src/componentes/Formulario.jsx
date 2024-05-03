import React, { useState } from "react";

const Formulario = ({ onAgregar, setAlerta, colaboradores }) => {
  const [nuevoColaborador, setNuevoColaborador] = useState({
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });

  const validarCorreo = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const getNextId = () => {
    const lastId = colaboradores[colaboradores.length - 1]?.id || 0;
    return String(Number(lastId) + 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoColaborador((prevColaborador) => ({
      ...prevColaborador,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = getNextId();
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
    if (!validarCorreo(nuevoColaborador.correo)) {
      setAlerta({ mensaje: "Formato de correo electrónico inválido.", tipo: "danger" });
      return;
    }
    onAgregar({ ...nuevoColaborador, id });
    setAlerta({ mensaje: "Colaborador agregado exitosamente.", tipo: "success" });
    setNuevoColaborador({
      nombre: "",
      correo: "",
      edad: "",
      cargo: "",
      telefono: "",
    });
  };

  return (
    <div className="container mt-4">
      <h2>Agregar Colaborador</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-2">
          <input
            type="text"
            className="form-control"
            name="nombre"
            placeholder="Nombre del colaborador"
            value={nuevoColaborador.nombre}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-2">
          <input
            type="email"
            className="form-control"
            name="correo"
            placeholder="Email del colaborador"
            value={nuevoColaborador.correo}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-2">
          <input
            type="number"
            className="form-control"
            name="edad"
            placeholder="Edad del colaborador"
            value={nuevoColaborador.edad}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-2">
          <input
            type="text"
            className="form-control"
            name="cargo"
            placeholder="Cargo del colaborador"
            value={nuevoColaborador.cargo}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-2">
          <input
            type="tel"
            className="form-control"
            name="telefono"
            placeholder="Teléfono del colaborador"
            value={nuevoColaborador.telefono}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Agregar colaborador
        </button>
      </form>
    </div>
  );
};

export default Formulario;


