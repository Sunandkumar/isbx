import { useState,useEffect } from 'react';
import Button from './reusablecomponents/Button';
import Card from './reusablecomponents/Card';
import NewCard from './reusablecomponents/NewCard';
import './MainContainer.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const MainContainer = () => {

  
  const [homecardsData, sethomecardsData] = useState([]);
 
  const navigate = useNavigate();

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/comments')
          .then(response => {
            sethomecardsData(response.data)
          })
          .catch(error => {
            console.error('error while fetching api:',error)
          });
  }, []);

//image 

  // useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/photos')
  //   .then(response => {
  //       setimageData(response.data)
  //   })
  //   .catch(error => {
  //     console.error('error while fetching api:',error)
  //   });
  // }, []);


  const viewallinstitutes = () => {
    navigate('/allinstitutes',{state: {homecardsData}});
  };

  const limitedCardsData = homecardsData.slice(0, 3);

  // const cardsData = [
  //   { title: 'CBIT', assignedPrograms: 5, currentPrograms: 3, completedPrograms: 10, upcomingPrograms: 2, imageUrl: '/src/assets/cbit2.jpg', imgIcon: '/src/assets/bar-chart.png' },
  //   { title: 'MIT', assignedPrograms: 7, currentPrograms: 5, completedPrograms: 8, upcomingPrograms: 4, imageUrl: '/src/assets/mit2.jpg', imgIcon: '/src/assets/bar-chart.png' },
  //   { title: 'VJIT', assignedPrograms: 6, currentPrograms: 4, completedPrograms: 11, upcomingPrograms: 3, imageUrl: '/src/assets/vjit.jpeg', imgIcon: '/src/assets/bar-chart.png' },
  // ];

  return (
    <>
      <div className="main-container">
        <div className="btn">
         
          <Button  text="+ Institutes" />
          <Button text="+ Programmes" />
        </div>
        <div className="card-grid">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className="recent">
        <h3>Recent Institutions</h3>
        <span className="view" onClick={viewallinstitutes}>View All Institutes ➔</span>
      </div>
      <div className="new-card-grid">
        {limitedCardsData.map((cardData, index) => (
          <NewCard key={index} {...cardData} />
        ))}
      </div>
      
    </>
  );
};

export default MainContainer;
