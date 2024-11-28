import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../login/Login';
import { LandingPage } from '../landingPage/LandingPage';
import { MainEspacios } from '../espacios/mainEspacios/MainEspacios';
import { LandingPLinea } from '../landingPage/primeraLinea/LandingPLinea';
import CrudPLinea from '../espacios/linea1/CrudPLinea';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path='/landingPLinea' element={<LandingPLinea/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/main' element={<MainEspacios/>}/>
        <Route path="/crudLinea1" element={<CrudPLinea />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
