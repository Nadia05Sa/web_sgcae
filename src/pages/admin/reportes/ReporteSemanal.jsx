import '../../../styles/Menu.css';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';

const ReporteSemanales = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="menu-container">
            <div>
                <div className="menu-conteiner-titulo" style={{ minWidth: "400px" }}>
                    <InsertDriveFileIcon sx={{ fontSize: 40, color: 'white' }} />
                    <h1 className="menu-titulo">Reportes semanales</h1>
                </div>

                <div className="menu-container-opciones">
                </div>
            </div>

        </div>
    );
};

export default ReporteSemanales;
