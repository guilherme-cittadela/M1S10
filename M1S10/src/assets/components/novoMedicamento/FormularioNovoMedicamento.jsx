import React, { useState } from 'react';

function FormularioNovoMedicamento({ adicionarMedicamento }) {
  const [nome, setNome] = useState('');
  const [laboratorio, setLaboratorio] = useState('');
  const [preco, setPreco] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const novoMedicamento = {
      nome,
      laboratorio,
      preco,
    };

    adicionarMedicamento(novoMedicamento);

    setNome('');
    setLaboratorio('');
    setPreco('');
  };

  return (
    <div>
      <h2>Cadastro de Novo Medicamento</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome do Medicamento:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="laboratorio">Nome do Laboratório:</label>
          <input
            type="text"
            id="laboratorio"
            value={laboratorio}
            onChange={(e) => setLaboratorio(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="preco">Preço:</label>
          <input
            type="number"
            id="preco"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            required
          />
        </div>
        <button type="submit">Cadastrar Medicamento</button>
      </form>
    </div>
  );
}

export default FormularioNovoMedicamento;
