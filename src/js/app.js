import React from 'react';
import ReactDom from 'react-dom';

import '../sass/app.scss';

import Layout from './components/Layout';

const app = document.getElementById('app');
ReactDom.render(<Layout/>, app);
