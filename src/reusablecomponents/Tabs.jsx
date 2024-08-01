import  { useState } from 'react';
import './reusable.css';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('active');

  return (
    <div className="tabs">
      <button 
        className={`tab-button ${activeTab === 'active' ? 'active' : ''}`} 
        onClick={() => setActiveTab('active')}>
        Active Programmes
      </button>
      <button 
        className={`tab-button ${activeTab === 'completed' ? 'active' : ''}`} 
        onClick={() => setActiveTab('completed')}>
        Completed Programmes
      </button>
      <button 
        className={`tab-button ${activeTab === 'upcoming' ? 'active' : ''}`} 
        onClick={() => setActiveTab('upcoming')}>
        Upcoming Programmes
      </button>
    </div>
  );
};

export default Tabs;
