import  { useState } from 'react';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const defaultMenus = [
    { title: 'Dashboard', src: 'dash', gap: true },
    { title: 'Building', src: 'building' },
    { title: 'Programmes', src: 'programmer' },
    { title: 'Departments', src: 'department' },
    { title: 'Teachers', src: 'teacher' },
    { title: 'Students', src: 'student' },
  ];

  const alternativeMenus = [
    { title: 'Dashboardwhite', src: 'dashboardwhite' },
    { title: 'Building', src: 'bankwhite' },
    { title: 'Programmes', src: 'programmerwhite' },
    { title: 'Departments', src: 'departmentwhite' },
    { title: 'Teachers', src: 'teacherwhite' },
    { title: 'Students', src: 'studentwhite' },
  ];

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className={`sidebar ${open ? 'open' : ''}`}>
      <img
        src="./src/assets/control.png"
        className={`control ${!open ? 'rotate' : ''}`}
        onClick={handleToggle}
        alt="Toggle Sidebar"
      />
      <div className="logo-container">
        <img
          src="./src/assets/idb.png"
          onClick={handleToggle}
          className={`logo ${open ? 'rotate-logo' : 'resize-logo'}`}
          alt="Logo"
        />
      </div>
      <ul className="menu">
        {(open ? defaultMenus : alternativeMenus).map((menu, index) => (
          <li
            key={index}
            className={`menu-item ${menu.gap ? 'gap' : ''}`}
          >
            <img src={`./src/assets/${menu.src}.png`} alt={menu.title} />
            <span className={`menu-title ${!open ? 'hidden' : ''}`}>
              {menu.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
