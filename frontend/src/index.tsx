import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/components/App/App';
import '../src/core/components/App/App.scss'
import 'animate.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

