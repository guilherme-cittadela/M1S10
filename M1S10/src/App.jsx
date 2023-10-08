import { Header } from "./assets/components/header/Header"
import { ListaMedicamentos } from "./assets/components/listaMedicamentos/ListaMedicamentos"
import NovoMedicamento from "./assets/components/novoMedicamento/NovoMedicamento"
import { MedicamentosProvider } from './assets/context/Context.jsx'

function App() {

  return (
    <>
        <MedicamentosProvider>
          <Header/>
          <NovoMedicamento/>
          <ListaMedicamentos/>
        </MedicamentosProvider>
    </>
  )
}

export default App
