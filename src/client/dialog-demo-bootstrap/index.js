import React from 'react';
import { createRoot } from 'react-dom/client';
import MainApplication from './components/MainApplication';

import './styles.css';

const container = document.getElementById('index');
const root = createRoot(container);
root.render(<MainApplication />);
