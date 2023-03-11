import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detalhes from './components/detalhes/Detalhes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
     <Route path='/' element={<App/>}/>
     <Route path='/detalhes/:id' element={<Detalhes/>}/>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
