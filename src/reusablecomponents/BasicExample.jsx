import React from 'react';
import Card from 'react-bootstrap/Card';

const BasicExample = ({
  imageUrl,
  enrollednumber,
  onschedulenumber,
  behindschedulenumber,
  enrolled,
  onschedule,
  behindschedule,
  started,
  ended,
  essentials,
}) => {
  return (
    <div className="card-detail-container">
      <Card style={{ width: '100%' }}>
        <Card.Img variant="top" src={imageUrl} alt="Institution" className="card-detail-image" />
        <Card.Body>
          <Card.Text>
            <div className="card-detail-header">
              <div className="card-detail-metric">
                <span style={{ color: 'green', fontSize: '18px', fontWeight: 'bolder', margin: '10px' }}>{enrollednumber}</span>
                <h6 className="header-text">{enrolled}</h6>
              </div>
              <div className="card-detail-metric">
                <span style={{ color: 'blue', fontSize: '18px', fontWeight: 'bolder', margin: '24px' }}>{onschedulenumber}</span>
                <h6 className="header-text">{onschedule}</h6>
              </div>
              <div className="card-detail-metric">
                <span style={{ color: 'red', fontSize: '18px', fontWeight: 'bolder', margin: '24px' }}>{behindschedulenumber}</span>
                <h6 className="header-text">{behindschedule}</h6>
              </div>
            </div>
            <div className="card-detail-content">
              <div className="card-detail-item">Started on: {started}</div>
              <div className="card-detail-item">Ends on: {ended}</div>
              <div className="card-detail-item-strong">
                <strong>{essentials}</strong>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BasicExample;
