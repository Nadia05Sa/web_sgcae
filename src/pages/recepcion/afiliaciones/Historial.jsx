//import { useEffect, useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import '../../../styles/Menu.css';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

const Historial = () => {

    return (
        <div className='menu-container'>
            <div>
                <div className='menu-conteiner-titulo' style={{ minWidth: "300px"}}>
                    <AssignmentIndIcon sx={{ fontSize: 40, color: 'white' }} />
                    <h1 className='menu-titulo'>Historial de afiliaciones</h1>
                </div>
                <div className='menu-container-opciones'>
                    
                </div>
            </div>

        </div>
    );
};

export default Historial;
