import '../../../styles/Menu.css';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';

const Secciones = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="menu-container">
            <div>
                <div className='menu-conteiner-titulo' style={{ minWidth: "300px" }}>
                    <SearchIcon sx={{ fontSize: 40, color: 'white' }} />
                <h1 className="menu-titulo">Secciones</h1>
                </div>
                <div className='menu-container-opciones'>

                </div>
            </div>
        </div>
    );
};

export default Secciones;
