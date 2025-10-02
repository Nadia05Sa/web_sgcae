import '../../styles/Menu.css';
import SettingsIcon from '@mui/icons-material/Settings';
import FeedIcon from '@mui/icons-material/Feed';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import HistoryIcon from '@mui/icons-material/History';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { FaRegFilePdf } from 'react-icons/fa';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';


const MenuAdmin = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const opciones = [
    { icon: <InsertDriveFileIcon sx={{ fontSize: 40, color: 'white' }} />, label: 'Reportes', path: 'reportes' },
    { icon: <CalendarMonthIcon sx={{ fontSize: 40, color: 'white' }} />, label: 'Citas', path: 'citas' },
    { icon: <FaRegFilePdf style={{ fontSize: 40, color: 'white' }} />, label: 'PDF', path: 'pdf' },
    { icon: <HistoryIcon sx={{ fontSize: 40, color: 'white' }} />, label: 'Historial', path: 'historial' },
    { icon: <SearchIcon sx={{ fontSize: 40, color: 'white' }} />, label: 'Secciones', path: 'secciones' },
  ];

  if (location.pathname.includes('reportes') || location.pathname.includes('citas') || location.pathname.includes('pdf') || location.pathname.includes('historial') || location.pathname.includes('secciones')) {
    return <Outlet />;
  }

  return (
    <div className='menu-container'>
      <div>
        <div className='menu-conteiner-titulo' style={{ minWidth: "300px" }}>
          <SettingsIcon sx={{ fontSize: 40, color: 'white' }} />
          <h1 className='menu-titulo'>Configuraciones</h1>
        </div>
        <div className='menu-container-opciones'>
          {opciones.map((opcion, index) => (
            <button
              key={index}
              className="menu-boton"
              onClick={() => navigate(opcion.path)}
              aria-label={opcion.label}
            >
              {opcion.icon}
              <h2>{opcion.label}</h2>
              <ArrowForwardIcon sx={{ fontSize: 50, color: 'white' }} />
            </button>
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default MenuAdmin;
