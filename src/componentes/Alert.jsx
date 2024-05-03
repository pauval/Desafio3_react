import React from "react";

const Alert = ({ mensaje, tipo }) => {
  if (!mensaje) return null; 

  return (
    <div className={`alert alert-${tipo}`} role="alert">
      {mensaje}
    </div>
  );
};

export default Alert;

