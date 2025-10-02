import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';

import Header from '../pages/common/Header.jsx'
import SplashScreen from '../pages/common/SplashScreen';
import Login from '../pages/common/Login';
import DashboardAdmin from '../pages/admin/DashboardAdmin';
import DashboardRecepcion from '../pages/recepcion/DashboardRecepcion.jsx';
import MenuAdmin from '../pages/admin/MenuAdmin.jsx';
import MenuRecepcion from '../pages/recepcion/MenuRecepcion.jsx';
import { useEffect } from "react";
import { authService } from "../service/AuthService.jsx";
import '../styles/Dashboard.css';
import fondo from '../assets/FondoDos.png';
// Para las rutas protegidas dependiedo del rol:)
// Componente de ruta protegida por rol
function ProtectedRoute({ children, allowedRoles }) {
    const isAuthenticated = authService.isAuthenticated();
    const userRole = authService.getRole();

    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }
    if (allowedRoles && !allowedRoles.includes(userRole)) {
        return <Navigate to="/no-autorizado" replace />;
    }
    return children;
}

function App() {
    /* autenticar usuario
    useEffect(() => {
        // Initialize authentication on app startup
        authService.initializeAuth();
    }, []);
    */

    return (
        <Router>
            <MainLayout />
        </Router>
    );
}

function MainLayout() {
    const location = useLocation();

    // Rutas donde NO mostrar el menu
    const hideSidebarRoutes = ['/', '/login'];
    const showSidebar = !hideSidebarRoutes.includes(location.pathname);

    const mainStyle = showSidebar
        ? { height: '100%', backgroundImage: `url(${fondo})` }
        : { height: '100%' };

    return (
        <div className={showSidebar && "dashboard-container"} style={mainStyle}>
            {showSidebar && <Header />}
            <div>
                <Routes>
                    {/* Pantalla de carga */}
                    <Route path="/" element={<SplashScreen />} />

                    {/* Login */}
                    <Route path="/login" element={<Login />} />

                    {/* Rutas solo para admin */}
                    <Route path="/dashboard-admin" element={
                        <ProtectedRoute allowedRoles={['ADMIN']}><DashboardAdmin /></ProtectedRoute>
                    } />
                    <Route path="/menu-admin" element={
                        <ProtectedRoute allowedRoles={['ADMIN']} ><MenuAdmin /></ProtectedRoute>
                    } />

                    {/* Rutas solo para recepcion */}
                    <Route path="/dashboard-recepcion" element={
                        <ProtectedRoute allowedRoles={['RECEPCION']} ><DashboardRecepcion /></ProtectedRoute>
                    } >
                    </Route>
                    <Route path="/menu-recepcion" element={
                        <ProtectedRoute allowedRoles={['RECEPCION']} ><MenuRecepcion /></ProtectedRoute>
                    } >
                    </Route>


                    {/* Redirección para rutas no encontradas */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
        </div>
    );
};

export default App
