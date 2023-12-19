import React from 'react';
import ReactDOM from 'react-dom/client';
import Website from './Website';
import reportWebVitals from './Helpers/reportWebVitals';
import GlobalState from './Context/GlobalState';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <GlobalState>
      <div className='bg-blue-100 h-auto border-b-2 border-black'>
        <Website />
      </div>
    </GlobalState>
  </React.StrictMode>
);

reportWebVitals();
