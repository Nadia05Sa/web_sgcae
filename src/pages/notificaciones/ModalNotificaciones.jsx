import React from 'react';
import '../../styles/ModalNotificaciones.css';

const ModalNotificaciones = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>&times;</button>
        {children}
      </div>
    </div>
  );
};

export default ModalNotificaciones;
