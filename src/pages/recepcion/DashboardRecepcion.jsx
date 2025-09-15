import { useNavigate } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import '../../styles/DashboardRecepcion.css';
import fondo from '../../assets/FondoDos.png';
import logo from '../../assets/social-justice.png';
import { FaSearch } from 'react-icons/fa';

const DashboardRecepcion = () => {
  const navigate = useNavigate();

  const eventos = [
    {
      title: 'Cita  - Juan Pérez',
      start: new Date().toISOString().split('T')[0] + 'T10:00:00',
      end: new Date().toISOString().split('T')[0] + 'T11:00:00',
    },
    {
      title: 'Cita  - María López',
      start: new Date().toISOString().split('T')[0] + 'T13:00:00',
    },
  ];

  return (
    <div className="dashboard-recepcion" style={{ backgroundImage: `url(${fondo})` }}>
      <header className="header">
        <img src={logo} alt="Logo" className="logo-icon" />
        <nav className="nav-bar">
          <button className="nav-btn active">Home</button>
          <button className="nav-btn" onClick={() => navigate('/menu')}>Menu</button>
          <button className="nav-btn" onClick={() => navigate('/notificaciones')}>Notificaciones</button>
        </nav>
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Buscar" />
          <button className="search-button">Buscar</button>
        </div>
      </header>

      <main className="calendar-section">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="timeGridWeek"
          events={eventos}
          locale="es"
          editable={false}
          selectable={true}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay',
          }}
        />
      </main>
    </div>
  );
};

export default DashboardRecepcion;
