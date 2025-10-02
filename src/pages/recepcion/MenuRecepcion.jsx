//import { useEffect, useState } from 'react';
import '../../styles/Menu.css';
import SettingsIcon from '@mui/icons-material/Settings';
import FeedIcon from '@mui/icons-material/Feed';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import HistoryIcon from '@mui/icons-material/History';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';

const MenuRecepcion = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const opciones = [
        { icon: <FeedIcon sx={{ fontSize: 40, color: 'white' }} />, label: 'Formulario', path: 'formulario' },
        { icon: <CalendarMonthIcon sx={{ fontSize: 40, color: 'white' }} />, label: 'Citas', path: 'citas' },
        { icon: <InsertDriveFileIcon style={{ fontSize: 40, color: 'white' }} />, label: 'Reportes', path: 'reportes' },
        { icon: <HistoryIcon sx={{ fontSize: 40, color: 'white' }} />, label: 'Historial', path: 'historial' },
        { icon: <AssignmentIndIcon sx={{ fontSize: 40, color: 'white' }} />, label: 'Afiliaciones', path: 'afiliaciones' },
    ];

    if (location.pathname.includes('formulario') || location.pathname.includes('citas') || location.pathname.includes('reportes') || location.pathname.includes('historial') || location.pathname.includes('afiliaciones')) {
        return <Outlet />;
    }
    return (
        <div className='menu-container'>
            <div>
                <div className='menu-conteiner-titulo' style={{ minWidth: "300px" }}>
                    <SettingsIcon sx={{ fontSize: 40, color: 'white' }} />
                    <h1 className='menu-titulo'>Configuraciones</h1>
                </div>
                <div className='menu-container-opciones'>
                    {opciones.map((opcion, index) => (
                        <button
                            key={index}
                            className="menu-boton"
                            onClick={() => navigate(opcion.path)}
                            aria-label={opcion.label}
                        >
                            {opcion.icon}
                            <h2>{opcion.label}</h2>
                            <ArrowForwardIcon sx={{ fontSize: 50, color: 'white' }} />
                        </button>
                    ))}
                </div>
            </div>
            <Outlet />
        </div>
    );
};

export default MenuRecepcion;
