
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const navigateLogout = () => {
    navigate('/login');
  };

  return (
    <header className="header">
      <h1 className="dash-title">Dashboard</h1>
      <h1 onClick={navigateLogout} className="dash-title-log">Logout</h1>
    </header>
  );
};

export default Header;
