import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import '../../styles/Dashboard.css';
import { FaSearch } from 'react-icons/fa';

const DashboardAdmin = () => {
  const today = new Date().toISOString().split('T')[0];

  const [eventos] = useState([
    {
      title: 'Cita - Juan Pérez',
      start: `${today}T10:00:00`,
      end: `${today}T11:00:00`,
    },
    {
      title: 'Cita - María López',
      start: `${today}T13:00:00`,
    },
  ]);

  const [query, setQuery] = useState('');

  const handleSearch = () => {
    console.log('Buscando:', query);
  };

  return (
    <div className="dashboard-admin">
      <div className="search-container">
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Buscar"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Buscar eventos"
          />
          <button className="search-button" onClick={handleSearch}>
            Buscar
          </button>
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

export default DashboardAdmin;
