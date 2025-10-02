//import { useEffect, useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import '../../../styles/Menu.css';
import HistoryIcon from '@mui/icons-material/History';

const ApoyosDatosPersonales = () => {

    return (
        <div className='menu-container'>
            <div>
                <div className='menu-conteiner-titulo' style={{ minWidth: "300px"}}>
                    <HistoryIcon sx={{ fontSize: 40, color: 'white' }} />
                    <h1 className='menu-titulo'>Datos personales</h1>
                </div>
                <div className='menu-container-opciones'>
                    
                </div>
            </div>

        </div>
    );
};

export default ApoyosDatosPersonales;
