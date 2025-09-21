import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SplashScreen from '../pages/common/SplashScreen';
import Login from '../pages/common/Login';
import DashboardAdmin from '../pages/admin/DashboardAdmin';
import HeaderRecepcion from '../pages/recepcion/HeaderRecepcion';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard-admin" element={<DashboardAdmin />} />
        <Route path="/dashboard-recepcion" element={<HeaderRecepcion />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
