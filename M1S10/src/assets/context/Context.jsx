import React, { createContext, useState, useContext } from 'react';

const MedicamentosContext = createContext();

export const MedicamentosProvider = ({ children }) => {
  const [medicamentos, setMedicamentos] = useState([]);

  const adicionarMedicamento = (novoMedicamento) => {
    setMedicamentos([...medicamentos, novoMedicamento]);
  };

  const favoritarMedicamento = (medicamentoId) => {
    setMedicamentos((medicamentos) =>
      medicamentos.map((medicamento) =>
        medicamento.id === medicamentoId
          ? { ...medicamento, favorito: !medicamento.favorito }
          : medicamento
      )
    );
  };

  return (
    <MedicamentosContext.Provider
      value={{ medicamentos, adicionarMedicamento, favoritarMedicamento }}
    >
      {children}
    </MedicamentosContext.Provider>
  );
};

export const useMedicamentos = () => {
  return useContext(MedicamentosContext);
};
