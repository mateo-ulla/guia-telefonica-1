import React, { useState, useEffect } from "react";
import axios from "axios";
import App from "../App";

function Tabla({ userData }) {
  const id = userData.map((user, index) => user.id);

  const handleDelete = () => {
    axios
      .delete(`http://localhost:3000/usuarios/${id}`)
      .then(function (response) {
        console.log(`Se borro el usuario con el id: ${id}`);
      })
      .catch(function (error) {
        console.log("No se pudo borrar");
      });
  };

  return (
    <div>
      <table>
        <colgroup span="5" className="columns"></colgroup>
        <thead>
          <tr>
            <th>
              <b>Nombre:</b>
            </th>
            <th>
              <b>Apellido:</b>
            </th>
            <th>
              <b>Edad:</b>
            </th>
            <th>
              <b>Teléfono:</b>
            </th>
            <th>
              <b>Acciones:</b>
            </th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={id}>
              <td>{user.nombre}</td>
              <td>{user.apellido}</td>
              <td>{user.edad}</td>
              <td>{user.telefono}</td>
              <td>
                <button onClick={handleDelete}>Borrar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tabla;
