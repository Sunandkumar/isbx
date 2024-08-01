//import  { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './reusable.css';
import Tabs from './Tabs';
import BasicExample from './BasicExample';// Import the reusable component
import Card from './Card';



const CardDetail = () => {

  //const[basicexample, setBasicexample] = useState([]);
  
  const location = useLocation();
  const navigate = useNavigate();

//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/users')
//         .then(response => {
//             setBasicexample(response.data)
//         })
//         .catch(error => {
//             console.error('error while fetching api',error)
//         });

//   },[]);

  const {
    imageUrl,
    enrolled,
    onschedule,
    behindschedule,
    started,
    ended,
    essentials,
    enrollednumber,
    onschedulenumber,
    behindschedulenumber,
  } = location.state || {};

  const handleBackClick = () => {
    navigate(-1); 
  };

  return (
    <>
      {/* Uncomment this if you want to include the header */}
      {/* <div className='headerdiv'>
        <Header/>
      </div> */}
      <div className='institute-dashboard'>
        <div className="back-to-dashboard" onClick={handleBackClick}>
          <h3 className='b-t-b'><span>⬅</span> Back to Dashboard</h3>
        </div>
        <div className="institute-header">
          <h3>Institute Dashboard - Vidya Jyothi Institute</h3>
        </div>
      </div>

      <div className="card-grid">
        {Array.from({ length: 4 }).map((_, index) => (
          <Card key={index} />
        ))}
      </div>

      {/* Tabs component */}
      <div>
        <Tabs className="tabs"/>
      </div>

      {/* Use the BasicExample component */}
      <div className='programmes'>
        <h4 className='prog'>Programmes</h4>
        <div className='card-flex'>
      <BasicExample
        imageUrl={imageUrl}
        enrollednumber={enrollednumber}
        onschedulenumber={onschedulenumber}
        behindschedulenumber={behindschedulenumber}
        enrolled={enrolled}
        onschedule={onschedule}
        behindschedule={behindschedule}
        started={started}
        ended={ended}
        essentials={essentials}
      />
      <BasicExample
        imageUrl={imageUrl}
        enrollednumber={enrollednumber}
        onschedulenumber={onschedulenumber}
        behindschedulenumber={behindschedulenumber}
        enrolled={enrolled}
        onschedule={onschedule}
        behindschedule={behindschedule}
        started={started}
        ended={ended}
        essentials={essentials}
      />
      <BasicExample
        imageUrl={imageUrl}
        enrollednumber={enrollednumber}
        onschedulenumber={onschedulenumber}
        behindschedulenumber={behindschedulenumber}
        enrolled={enrolled}
        onschedule={onschedule}
        behindschedule={behindschedule}
        started={started}
        ended={ended}
        essentials={essentials}
      />
      </div>
      </div>
      
    </>
  );
};

export default CardDetail;
