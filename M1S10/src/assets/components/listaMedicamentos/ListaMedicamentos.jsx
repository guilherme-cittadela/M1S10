import React from 'react';
import { useMedicamentos } from '../../context/Context';
import Card from '../card/Card';
import './lista.css';

function ListaMedicamentos() {
  const { medicamentos } = useMedicamentos();
  const { favoritarMedicamento } = useMedicamentos();

  console.log("medicamentos: ", medicamentos);

  return (
    <div className='lista-medicamentos'>
      {medicamentos.length === 0 ? (
        <p>Nenhum medicamento cadastrado ainda.</p>
      ) : (
        medicamentos.map((medicamento) => (
          <Card
            key={medicamento.id}
            nome={medicamento.nome}
            laboratorio={medicamento.laboratorio}
            preco={medicamento.preco}
            favorito={medicamento.favorito}
            onFavoritarClick={favoritarMedicamento}
          />
        ))
      )}
    </div>
  );
}

export { ListaMedicamentos };
