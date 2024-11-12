import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrimeraLinea from '../espacios/linea1/PrimeraLinea';
import Login from '../login/Login';
import { LandingPage } from '../landingPage/LandingPage';
import { MainEspacios } from '../espacios/mainEspacios/MainEspacios';
import { LandingPLinea } from '../landingPage/primeraLinea/LandingPLinea';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path='/landingPLinea' element={<LandingPLinea/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/main' element={<MainEspacios/>}/>
        <Route path="/pLinea" element={<PrimeraLinea />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
