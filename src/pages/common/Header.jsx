import { use, useEffect, useState } from 'react';
import '../../styles/Dashboard.css';
import fondo from '../../assets/FondoDos.png';
import logo from '../../assets/social-justice.png';
import NotificacionesRecepcion from '../notificaciones/NotificacionesRecepcion';
import ModalNotificaciones from '../notificaciones/ModalNotificaciones';
import { useLocation, useNavigate } from "react-router-dom";
import { authService } from "../../service/AuthService.jsx";

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [notificaciones, SetNotificaciones] = useState(null);

    const [active, SetActive] = useState(true); // Estado para el botón activo
    // Navegación simple según el rol
    const goDashboard = () => {
        if (authService.getRole() === "ADMIN") {
            navigate('/dashboard-admin');
        } else if (authService.getRole() === "RECEPCION") {
            navigate('/dashboard-recepcion');
        }
    };
    const goMenu = () => {
        if (authService.getRole() === "ADMIN") {
            navigate('/menu-admin');
        } else if (authService.getRole() === "RECEPCION") {
            navigate('/menu-recepcion');
        }
    };

    useEffect(() => {
        if (location.pathname.includes('dashboard')) {
            SetActive(true);
        } else {
            SetActive(false);
        }
    }, [location.pathname]);

    return (
        <div>
            <header className="header">
                <img src={logo} alt="Logo" className="logo-icon" />
                <nav className="nav-bar">
                    <button className={active ? "nav-btn active" : "nav-btn"} onClick={goDashboard}>Home</button>
                    <button className={!active ? "nav-btn active" : "nav-btn"} onClick={goMenu}>Menu</button>
                    <button className="nav-btn" onClick={()=> SetNotificaciones(!notificaciones)}>Notificaciones</button>
                </nav>
            </header>
            <ModalNotificaciones open={notificaciones} onClose={() => SetNotificaciones(false)}>
                <NotificacionesRecepcion />
            </ModalNotificaciones>
        </div>
    );
};

export default Header;
