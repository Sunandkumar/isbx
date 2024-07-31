import { Routes, Route } from 'react-router-dom';
import MainContainer from './MainContainer';
import CardDetail from './reusablecomponents/CardDetail';
import Login from './reusablecomponents/Login';
import Layout from './Layout/Layout';
import './App.css';
import AllInstitutes from './reusablecomponents/AllInstitutes';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainContainer />} />
        <Route path="/detailcard" element={<CardDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/allinstitutes" element={<AllInstitutes/>}></Route>
      </Routes>
    </Layout>
  );
};

export default App;
