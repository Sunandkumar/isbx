import { useLocation } from 'react-router-dom';
import './reusable.css';
const CardDetail = () => {
  const location = useLocation();
  const { imageUrl, enrolled, onschedule, behindschedule, started ,ended, essentials, enrollednumber,onschedulenumber,behindschedulenumber} = location.state || {};
  const spanStyleenrollednumber = {   
    color: 'green',
    fontSize: '18px',
    fontWeight: 'bolder',
    margin: '10px',
  };
  const spanStyleonschedule = {
    color: 'blue',
    fontSize: '18px',
    fontWeight: 'bolder',
    margin: '10px',
  };
  const spanStylebehindschedule = {
    color: 'red',
    fontSize: '18px',
    fontWeight: 'bolder',
    margin: '10px',
  };
  return (
    <>
    <div>
        <h3><span>⬅</span>Back to Dashboard</h3>
    </div>
    <div>
        <h3>Institute Dashboard - Vidya Jyothi Institute</h3>
    </div>
    <div className="card-detail-container">
      <h3 className='mainheading'>Programmes</h3>
      <div className="complete-card-detail">
        <div className="card-detail-logo">
          <img src={imageUrl} alt="Institution" className="card-detail-image"/>
        </div>
        <div className="card-detail-header">
          <div>
          <span style={spanStyleenrollednumber}>{enrollednumber}</span>
          <h6 className='header-text'>{enrolled}</h6>
          </div>
          <div>
          <span style={spanStyleonschedule}>{onschedulenumber}</span>
          <h6 className='header-text'>{onschedule}</h6>
          </div>
          <div>
          <span style={ spanStylebehindschedule}>{behindschedulenumber}</span>
          <h6 className='header-text'>{behindschedule}</h6>
          </div>
        </div>
        <div className="card-detail-content">
                <div className="card-detail-item">{started}</div>
                <div className="card-detail-item">{ended}</div>
                <div className="card-detail-item-strong"><strong>{essentials}</strong></div>
            </div>
      </div>
    </div>
    </>
  );
};

export default CardDetail;