import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminEspacios from '../espacios/linea1/PrimeraLinea';  // Página principal
import Login from '../login/Login';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Login />} />  {/* Ruta a la página principal */}
        <Route path="/primeraLinea" element={<AdminEspacios />} />  {/* Ruta a la página principal */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
