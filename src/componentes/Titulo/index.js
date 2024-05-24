import React from 'react';
import estilo from '../Titulo/estiloTitulo.module.css';

export default function Titulo() {
  return (
    <div className={estilo.box}>
      <p className={estilo.texto}>Baralho dos Signos</p>
    </div>
  )
}

