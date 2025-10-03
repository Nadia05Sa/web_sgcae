import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import '../../styles/Dashboard.css';
import { FaSearch } from 'react-icons/fa';

const DashboardRecepcion = () => {

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
    <div>

      <div className="search-container">
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Buscar" />
          <button className="search-button">Buscar</button>
        </div>
      </div>

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
