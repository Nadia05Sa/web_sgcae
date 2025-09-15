import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/SplashScreen.css';
import logo from '../../assets/social-justice.png';
import fondo from '../../assets/FondoUno.png';

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirige después de 3 segundos
    const timer = setTimeout(() => {
      navigate('/login');
    }, 4000);

    return () => clearTimeout(timer); // Limpieza si el componente se desmonta
  }, [navigate]);

  return (
    <div className="splash-container">
      <img src={fondo} alt="Fondo" className="bg-image" />
      <div className="splash-content">
        <div className="branding">
          <img src={logo} alt="Logo SGCAE" className="logo" />
          <div className="text-group">
            <h1 className="titulo">SGCAE</h1>
            <p className="subtitulo">Sistema para la Gestión de Citas de Apoyo Económico</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
