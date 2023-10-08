import React, { useState } from 'react';
import { useMedicamentos } from '../../context/Context';
import './form.css';

function NovoMedicamento() {
  const { adicionarMedicamento } = useMedicamentos();
  const [nome, setNome] = useState('');
  const [laboratorio, setLaboratorio] = useState('');
  const [preco, setPreco] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (nome.trim() === '' || laboratorio.trim() === '' || preco.trim() === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const novoMedicamento = {
      id: Date.now(),
      nome,
      laboratorio,
      preco: parseFloat(preco),
      favorito: false,
    };

    adicionarMedicamento(novoMedicamento);

    setNome('');
    setLaboratorio('');
    setPreco('');
  };

  return (
    <form className="formulario-medicamento" onSubmit={handleFormSubmit}>
      <label htmlFor="nome">Nome do Medicamento</label>
      <input
        type="text"
        id="nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
      />

      <label htmlFor="laboratorio">Nome do Laboratório</label>
      <input
        type="text"
        id="laboratorio"
        value={laboratorio}
        onChange={(e) => setLaboratorio(e.target.value)}
        required
      />

      <label htmlFor="preco">Preço</label>
      <input
        type="text"
        id="preco"
        value={preco}
        onChange={(e) => setPreco(e.target.value)}
        required
      />

      <button type="submit">Cadastrar Medicamento</button>
    </form>
  );
}

export default NovoMedicamento;
