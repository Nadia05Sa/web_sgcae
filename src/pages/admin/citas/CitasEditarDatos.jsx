import '../../../styles/Menu.css';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';

const CitasEditarDatos = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="menu-container">
            <div>
                <div className="menu-conteiner-titulo">
                    <CalendarMonthIcon sx={{ fontSize: 40, color: 'white' }} />
                    <h1 className="menu-titulo">Editar datos</h1>
                </div>

                <div className="menu-container-opciones">
                </div>
            </div>

        </div>
    );
};

export default CitasEditarDatos;
