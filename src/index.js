import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ContextWrapper } from './Components/GlobalStateContext';
import App from './App';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
    <BrowserRouter>
      <ContextWrapper  name={""} isLoggedIn={false}>
         <App />
      </ContextWrapper>
    </BrowserRouter>
 </React.StrictMode>
);