import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import ShowCartContext from './components/Contexts/ShowCartContext';
import LightboxContext from './components/Contexts/LightboxContext';
import LitMobile from './components/Contexts/LitMobile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<React.StrictMode>
<ShowCartContext>
<LightboxContext>
<LitMobile>
<App />
</LitMobile>
</LightboxContext>
</ShowCartContext>
</React.StrictMode>

);

