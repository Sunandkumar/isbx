
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import {store} from './app/store';
import {persistor} from './app/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
 
  <Provider store={store}>
     
    <Router>
    <PersistGate  persistor={persistor}>
      <App />
      </PersistGate>
    </Router>
    
  </Provider>
  
);
