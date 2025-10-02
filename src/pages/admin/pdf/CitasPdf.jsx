import '../../../styles/Menu.css';
import { FaRegFilePdf } from 'react-icons/fa';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';

const CitasPdf = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="menu-container">
            <div>
                <div className="menu-conteiner-titulo">
                    <FaRegFilePdf sx={{ fontSize: 40, color: 'white' }} />
                    <h1 className="menu-titulo">Historial</h1>
                </div>

                <div className="menu-container-opciones">
                </div>
            </div>
        </div>

    );
};

export default CitasPdf;
