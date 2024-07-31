import Header from './Header';
import Sidebar from './Sidebar';


const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main-section">
        <Header />
        <div className="main-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
