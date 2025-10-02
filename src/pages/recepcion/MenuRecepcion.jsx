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

                    <button className='menu-boton' onClick={() => navigate('formulario')}>
                        <FeedIcon sx={{ fontSize: 40, color: 'white' }} />
                        <h2>Formulario</h2>
                        <ArrowForwardIcon sx={{ fontSize: 50, color: 'white' }} />
                    </button>
                    <button className='menu-boton' onClick={() => navigate('citas')}>
                        <CalendarMonthIcon sx={{ fontSize: 40, color: 'white' }} />
                        <h2>Citas</h2>
                        <ArrowForwardIcon sx={{ fontSize: 50, color: 'white' }} />
                    </button>
                    <button className='menu-boton' onClick={() => navigate('reportes')}>
                        <InsertDriveFileIcon sx={{ fontSize: 40, color: 'white' }} />
                        <h2>Reportes</h2>
                        <ArrowForwardIcon sx={{ fontSize: 50, color: 'white' }} />
                    </button>
                    <button className='menu-boton' onClick={() => navigate('historial')}>
                        <HistoryIcon sx={{ fontSize: 40, color: 'white' }} />
                        <h2>Historial</h2>
                        <ArrowForwardIcon sx={{ fontSize: 50, color: 'white' }} />
                    </button>
                    <button className='menu-boton' onClick={() => navigate('afiliaciones')}>
                        <AssignmentIndIcon sx={{ fontSize: 40, color: 'white' }} />
                        <h2>Afiliaciones</h2>
                        <ArrowForwardIcon sx={{ fontSize: 50, color: 'white' }} />
                    </button>
                </div>
            </div>
            <Outlet />
        </div>
    );
};

export default MenuRecepcion;
