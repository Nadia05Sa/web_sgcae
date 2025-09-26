import { useEffect, useState } from 'react';
import '../../styles/Dashboard.css';
import fondo from '../../assets/FondoDos.png';
import logo from '../../assets/social-justice.png';
import Dashboard from './DashboardRecepcion';
import MenuRecepcion from './MenuRecepcion';
import NotificacionesRecepcion from '../notificaciones/NotificacionesRecepcion';
import ModalNotificaciones from '../notificaciones/ModalNotificaciones';
import SettingsIcon from '@mui/icons-material/Settings';
import { Menu } from '@mui/material';

const HeaderRecepcion = () => {
    // const navigate = useNavigate();

    const [active, SetActive] = useState(true);
    const [notificaciones, SetNotificaciones] = useState(false);

    const seleccionar = (opcion) => {
        console.log(`Opción seleccionada: ${opcion}`);
        if (opcion === 'Dashboard') {
            SetActive(true);    
        }
        if (opcion === 'Menu') {
            SetActive(false);
        }
    };

    useEffect(() => {
        console.log(`Opción activa: ${active}`);
    }, [active]);
    
    return (
        <div className="dashboard-container" style={{ backgroundImage: `url(${fondo})` }}>
            <header className="header">
                <img src={logo} alt="Logo" className="logo-icon" />
                <nav className="nav-bar">
                    <button className={active ? "nav-btn active" : "nav-btn"} onClick={()=> seleccionar("Dashboard")}>Home</button>
                    <button className={!active ? "nav-btn active" : "nav-btn"} onClick={()=> seleccionar("Menu")}>Menu</button>
                    <button className="nav-btn" onClick={()=> SetNotificaciones(!notificaciones)}>Notificaciones</button>
                </nav>
            </header>

            {active === true ? <Dashboard /> : <MenuRecepcion />}

            <ModalNotificaciones open={notificaciones} onClose={() => SetNotificaciones(false)}>
                <NotificacionesRecepcion />
            </ModalNotificaciones>

        </div>

    );
};

export default HeaderRecepcion;
