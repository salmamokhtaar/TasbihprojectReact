import React from 'react';
import {createRoot} from 'react-dom/client';
import "./style.css";
import Layout from './components/layout/Layout';
import Home from './components/Home';

const root = document.getElementById('root');
createRoot(root).render(
  <React.StrictMode>
    <Layout>
      <Home />
    </Layout>
  </React.StrictMode>
);
