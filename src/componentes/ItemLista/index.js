import React from 'react';
import estilo from '../../componentes/ItemLista/estiloItemLista.module.css';

export default function ItemLista(props) {
  return (
    <div className={estilo.boxSigno}>
      <div className={estilo.nomeSigno}>
        {props.signo}
      </div>
      
      <img className={estilo.imagemSigno} src={props.imagem} alt={props.signo}/>
      
      <div className={estilo.periodoNascimento}>
        {props.dataInicio} - {props.dataFim}
      </div>
    </div>
  )
}
