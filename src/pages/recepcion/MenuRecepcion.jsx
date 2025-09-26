//import { useEffect, useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import '../../styles/Menu.css';
import SettingsIcon from '@mui/icons-material/Settings';
import FeedIcon from '@mui/icons-material/Feed';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import HistoryIcon from '@mui/icons-material/History';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const MenuRecepcion = () => {

    return (
        <div className='menu-container'>
            <div className='menu-conteiner-titulo'>
                <SettingsIcon sx={{ fontSize: 40, color: 'white' }} />
                <h1 className='menu-titulo'>Configuraciones</h1>
            </div>
            <div className='menu-container-opciones'>
                <button className='menu-boton'>
                    <FeedIcon sx={{ fontSize: 40, color: 'white' }} />
                    <h2>Formulario</h2>
                    <ArrowForwardIcon sx={{ fontSize: 50, color: 'white' }} />
                </button>
                <button className='menu-boton'>
                    <CalendarMonthIcon sx={{ fontSize: 40, color: 'white' }} />
                    <h2>Citas</h2>
                    <ArrowForwardIcon sx={{ fontSize: 50, color: 'white' }} />
                </button>
                <button className='menu-boton'>
                    <InsertDriveFileIcon sx={{ fontSize: 40, color: 'white' }} />
                    <h2>Reportes</h2>
                    <ArrowForwardIcon sx={{ fontSize: 50, color: 'white' }} />
                </button>
                <button className='menu-boton'>
                    <HistoryIcon sx={{ fontSize: 40, color: 'white' }} />
                    <h2>Citas</h2>
                    <ArrowForwardIcon sx={{ fontSize: 50, color: 'white' }} />
                </button>
                <button className='menu-boton'>
                    <AssignmentIndIcon sx={{ fontSize: 40, color: 'white' }} />
                    <h2>Afilaciones</h2>
                    <ArrowForwardIcon sx={{ fontSize: 50, color: 'white' }} />
                </button>
            </div>
        </div>
    );
};

export default MenuRecepcion;
