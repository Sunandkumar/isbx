import { useLocation } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
const Layout = ({ children }) => {
  const location = useLocation();
  const isDetailPage = location.pathname === '/detailcard';

  return (
    <div className="layout">
      {!isDetailPage && <Sidebar />}
      <div className="main-section">
        {!isDetailPage && <Header />}
        <div className="main-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
