import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import 'antd/dist/antd.css';
import 'styles/main.css';
import 'assets/fonts/font.css';

const rootEl = document.createElement('div');
rootEl.id = 'root';
document.body.insertBefore(rootEl, document.body.childNodes[0]);

const root = ReactDOM.createRoot(rootEl);

root.render(<App />, rootEl);
