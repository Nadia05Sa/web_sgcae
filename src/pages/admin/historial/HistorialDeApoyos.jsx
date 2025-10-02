import '../../../styles/Menu.css';
import HistoryIcon from '@mui/icons-material/History';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';

const HistorialDeApoyos = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="menu-container">
            <div>
                <div className="menu-conteiner-titulo" style={{ minWidth: "350px" }}>
                    <HistoryIcon sx={{ fontSize: 40, color: 'white' }} />
                    <h1 className="menu-titulo">Historial de apoyos</h1>
                </div>

                <div className="menu-container-opciones">
                </div>
            </div>

        </div>
    );
};

export default HistorialDeApoyos;
