import React from 'react';
import ReactDOM from 'react-dom/client';
import Mainscreen from './components/mainscreen/Mainscreen';
import Overlay from './components/overlay/Overlay';
import Background from './components/background/Background';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div><Background>
</Background> 
<Overlay></Overlay></div>

);

