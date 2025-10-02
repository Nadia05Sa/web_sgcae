import '../styles/Dashboard.css';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { authService } from "../service/AuthService.jsx";
import fondo from '../assets/FondoDos.png';

import Header from '../pages/common/Header.jsx'
import SplashScreen from '../pages/common/SplashScreen';
import Login from '../pages/common/Login';
import DashboardAdmin from '../pages/admin/DashboardAdmin';
import DashboardRecepcion from '../pages/recepcion/DashboardRecepcion.jsx';
import MenuAdmin from '../pages/admin/MenuAdmin.jsx';
import MenuRecepcion from '../pages/recepcion/MenuRecepcion.jsx';
import Perfil from "../pages/recepcion/formulario/Perfil.jsx";
import CitasAprobadas from "../pages/recepcion/citas/CitasAprobadas.jsx";
import CitasDatosPersona from "../pages/recepcion/citas/CitasDatosPersona.jsx";
import ReporteSem from "../pages/recepcion/reportes/ReporteSem.jsx";
import Apoyos from "../pages/recepcion/historial/Apoyos.jsx";
import ApoyosDatosPersona from "../pages/recepcion/historial/ApoyosDatosPersona.jsx";
import Historial from "../pages/recepcion/afiliaciones/Historial.jsx";
import RegistrarPerfil from "../pages/recepcion/afiliaciones/RegistrarPerfil.jsx";
import ReporteSemanales from '../pages/admin/reportes/ReporteSemanal.jsx';
import Aprobadas from '../pages/admin/citas/Aprobadas.jsx';
import CitasVerDatos from '../pages/admin/citas/CitasVerDatos.jsx';
import CitasEditarDatos from '../pages/admin/citas/CitasEditarDatos.jsx';
import CitasPdf from '../pages/admin/pdf/CitasPdf.jsx';
import DatosCita from '../pages/admin/pdf/DatosCita.jsx';
import HistorialDeApoyos from '../pages/admin/historial/HistorialDeApoyos.jsx';
import Secciones from '../pages/admin/secciones/Secciones.jsx';
import AgregarSeccion from '../pages/admin/secciones/AgregarSeccion.jsx';

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
        <div className={showSidebar ? "dashboard-container" : ""} style={mainStyle}>
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
                    } >
                        {/* Reportes */}
                        <Route path="reportes" element={
                            <ProtectedRoute allowedRoles={['ADMIN']} ><ReporteSemanales /></ProtectedRoute>
                        } >
                        </Route>

                        {/* Citas */}
                        <Route path="citas" element={
                            <ProtectedRoute allowedRoles={['ADMIN']} ><Aprobadas /></ProtectedRoute>
                        } >
                            {/* ver */}
                            <Route path="ver" element={
                                <ProtectedRoute allowedRoles={['ADMIN']} ><CitasVerDatos /></ProtectedRoute>
                            } >
                            </Route>
                            {/* editar */}
                            <Route path="editar" element={
                                <ProtectedRoute allowedRoles={['ADMIN']} ><CitasEditarDatos /></ProtectedRoute>
                            } >
                            </Route>
                        </Route>

                        {/* PDF */}
                        <Route path="pdf" element={
                            <ProtectedRoute allowedRoles={['ADMIN']} ><CitasPdf /></ProtectedRoute>
                        } >
                            {/* datos */}
                            <Route path="datos" element={
                                <ProtectedRoute allowedRoles={['ADMIN']} ><DatosCita /></ProtectedRoute>
                            } >
                            </Route>
                        </Route>

                        {/* Historial */}
                        <Route path="historial" element={
                            <ProtectedRoute allowedRoles={['ADMIN']} ><HistorialDeApoyos /></ProtectedRoute>
                        } >
                        </Route>

                        {/* Secciones */}
                        <Route path="secciones" element={
                            <ProtectedRoute allowedRoles={['ADMIN']} ><Secciones /></ProtectedRoute>
                        } >
                            {/* agregar */}
                            <Route path="reportes" element={
                                <ProtectedRoute allowedRoles={['ADMIN']} ><AgregarSeccion /></ProtectedRoute>
                            } >
                            </Route>
                        </Route>
                    </Route>

                    {/* Rutas solo para recepcion */}
                    <Route path="/dashboard-recepcion" element={
                        <ProtectedRoute allowedRoles={['RECEPCION']} ><DashboardRecepcion /></ProtectedRoute>
                    } >
                    </Route>

                    <Route path="/menu-recepcion" element={
                        <ProtectedRoute allowedRoles={['RECEPCION']} ><MenuRecepcion /></ProtectedRoute>
                    } >

                        {/* Formulario */}
                        <Route path="formulario" element={
                            <ProtectedRoute allowedRoles={['RECEPCION']} ><Perfil /></ProtectedRoute>
                        } >
                        </Route>
                        {/* Citas */}
                        <Route path="citas" element={
                            <ProtectedRoute allowedRoles={['RECEPCION']} ><CitasAprobadas /></ProtectedRoute>
                        } >
                            <Route path="datos" element={
                                <ProtectedRoute allowedRoles={['RECEPCION']} ><CitasDatosPersona /></ProtectedRoute>
                            } >
                            </Route>
                        </Route>
                        {/* Reportes */}
                        <Route path="reportes" element={
                            <ProtectedRoute allowedRoles={['RECEPCION']} ><ReporteSem /></ProtectedRoute>
                        } >
                        </Route>
                        {/* Historial */}
                        <Route path="historial" element={
                            <ProtectedRoute allowedRoles={['RECEPCION']} ><Apoyos /></ProtectedRoute>
                        } >
                            <Route path="datos" element={
                                <ProtectedRoute allowedRoles={['RECEPCION']} ><ApoyosDatosPersona /></ProtectedRoute>
                            } >
                            </Route>
                        </Route>
                        {/* Afiliaciones */}
                        <Route path="afiliaciones" element={
                            <ProtectedRoute allowedRoles={['RECEPCION']} ><Historial /></ProtectedRoute>
                        } >
                            <Route path="datos" element={
                                <ProtectedRoute allowedRoles={['RECEPCION']} ><RegistrarPerfil /></ProtectedRoute>
                            } >
                            </Route>
                        </Route>

                    </Route>


                    {/* Redirección para rutas no encontradas */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
        </div>
    );
};

export default App
