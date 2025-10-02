//import { useEffect, useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import '../../../styles/Menu.css';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const MenuRecepcion = () => {

    return (
        <div className='menu-container'>
            <div>
                <div className='menu-conteiner-titulo' style={{ minWidth: "300px"}}>
                    <CalendarMonthIcon sx={{ fontSize: 40, color: 'white' }} />
                    <h1 className='menu-titulo'>Datos persona</h1>
                </div>
                <div className='menu-container-opciones'>
                    
                </div>
            </div>

        </div>
    );
};

export default MenuRecepcion;
