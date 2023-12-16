import React from 'react';
import {createRoot} from 'react-dom/client';
import "./style.css";
import Hero from './hero';
const root=document.getElementById('root');
createRoot(root).render(
  <div>
    <Hero/>
  </div>
   
);

