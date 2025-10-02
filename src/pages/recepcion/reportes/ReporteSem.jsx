//import { useEffect, useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import '../../../styles/Menu.css';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

const MenuRecepcion = () => {

    return (
        <div className='menu-container'>
            <div>
                <div className='menu-conteiner-titulo' style={{ minWidth: "300px"}}>
                    <InsertDriveFileIcon sx={{ fontSize: 40, color: 'white' }} />
                    <h1 className='menu-titulo'>Reporte semanal</h1>
                </div>
                <div className='menu-container-opciones'>
                    
                </div>
            </div>

        </div>
    );
};

export default MenuRecepcion;
