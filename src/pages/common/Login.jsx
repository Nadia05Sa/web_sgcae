import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/social-justice.png';
import '../../styles/Login.css';
import {authService} from "../../service/AuthService.jsx";

const Login = () => {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!correo || !contrasena) {
      setError('Por favor completa todos los campos');
      return;
    }

    authService.login(correo,contrasena)

    if (correo === 'admin@gmail.com') {
      navigate('/dashboard-admin');
    } else if (correo === 'recepcion@gmail.com') {
      navigate('/dashboard-recepcion');
    } else {
      setError('Usuario no reconocido');
    }
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleSubmit}>
        <img src={logo} alt="Logo SGCAE" className="logo" />
        <h2 className="login-title">Inicio de Sesión</h2>

        <input
          type="email"
          placeholder="Correo electrónico"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          className="input-login"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          className="input-login"
        />

        {error && <p className="error-text">{error}</p>}

        <button type="submit" className="btn-ingresar">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;
