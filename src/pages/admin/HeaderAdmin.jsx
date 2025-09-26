import { useEffect, useState } from 'react';
import '../../styles/Dashboard.css';
import fondo from '../../assets/FondoDos.png';
import logo from '../../assets/social-justice.png';
import DashboardAdmin from './DashboardAdmin';
import MenuAdmin from './MenuAdmin';
import NotificacionesRecepcion from '../notificaciones/NotificacionesRecepcion';
import ModalNotificaciones from '../notificaciones/ModalNotificaciones';

const HeaderAdmin = () => {
  const [active, setActive] = useState(true);
  const [notificaciones, setNotificaciones] = useState(false);

  const seleccionar = (opcion) => {
    console.log(`Opción seleccionada: ${opcion}`);
    setActive(opcion === 'Dashboard');
  };

  useEffect(() => {
    console.log(`Opción activa: ${active}`);
  }, [active]);

  return (
    <div
      className="dashboard-container"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <header className="header">
        <img src={logo} alt="Logo" className="logo-icon" />
        <nav className="nav-bar">
          <button
            className={active ? 'nav-btn active' : 'nav-btn'}
            onClick={() => seleccionar('Dashboard')}
          >
            Home
          </button>
          <button
            className={!active ? 'nav-btn active' : 'nav-btn'}
            onClick={() => seleccionar('Menu')}
          >
            Menu
          </button>
          <button
            className="nav-btn"
            onClick={() => setNotificaciones((prev) => !prev)}
          >
            Notificaciones
          </button>
        </nav>
      </header>

      {active ? <DashboardAdmin /> : <MenuAdmin />}

      <ModalNotificaciones open={notificaciones} onClose={() => setNotificaciones(false)}>
        <NotificacionesRecepcion />
      </ModalNotificaciones>
    </div>
  );
};

export default HeaderAdmin;
