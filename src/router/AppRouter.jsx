import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrimeraLinea from '../espacios/linea1/PrimeraLinea';  // Página principal
import Login from '../login/Login';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Login />} />  {/* Ruta a la página principal */}
        <Route path="/primeraLinea" element={<PrimeraLinea />} />  {/* Ruta a la página principal */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
