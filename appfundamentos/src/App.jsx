import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./layout/Login";
import Dashboard from "./layout/Dashboard";
import FormularioLogin from "./paginas/Formulario";
import LandingPage from "./paginas/LandingPages";
import FundamentoUseEffect from "./paginas/FundamentosUseEffect";
import FundamentoUseState from "./paginas/FundamentoUseState";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<LandingPage />}>
        </Route>

        <Route path="/login" element={<Login />}>
          <Route index element={<FormularioLogin />} />
        </Route>

        <Route path="/fundamentos" element={<Dashboard />}>
          <Route path="usestate" element={<FundamentoUseState/>} />
          <Route path="useffect" element={<FundamentoUseEffect/>} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
