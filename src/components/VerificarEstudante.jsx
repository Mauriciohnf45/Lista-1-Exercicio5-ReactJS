// src/VerificarEstudante.js
import React from 'react';

function VerificarEstudante({ estudante }) {
  if (estudante) {
    return <p>Você é um estudante</p>;
  } else {
    return <p>Você não é um estudante</p>;
  }
}

export default VerificarEstudante;
