import { useNavigate } from 'react-router-dom';
import './reusable.css';

const NewCard = ({ imageUrl, imgIcon, title, id,name,email,thumbnailUrl }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/detailcard', { state: { imageUrl:'/src/assets/leadership.webp', enrolled:'Enrolled',onschedule:'On Schedule', behindschedule:'Behind Schedule',started:'Started on 11 April, 2024',ended:'Ends on 11 Aug, 2024',essentials:'Management Essentials',enrollednumber:'33',onschedulenumber:'29',behindschedulenumber:'04' } });
  };

  return (
    <div className="new-card-container" onClick={handleClick}>
      <div className="new-card-logo">
        <img src='/src/assets/vjit.jpeg' alt="Institution" className="card-image" />
      </div>
      <div className="new-card-header">
        <h2>{title}</h2>
        <span className="new-card-arrow">➔</span>
      </div>
      <div className="new-card-content">
        <div className="new-card-item-strong"><strong>Assigned Programmes</strong></div>
        <div className="new-card-item"><img src={imgIcon} alt="icon" className="icon"/>Id - {id}</div>
        <div className="new-card-item"><img src={imgIcon} alt="icon" className="icon"/>Name - {name}</div>
        <div className="new-card-item"><img src={imgIcon} alt="icon" className="icon"/>Email - {email}</div>
      </div>
    </div>
  );
};

export default NewCard;
