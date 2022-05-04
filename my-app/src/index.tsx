import React from 'react';
import ReactDOM, { createRoot } from "react-dom/client";
import './index.css';
import App from './App';

const container = document.getElementById("root");
const root = createRoot(container as HTMLElement);

//@ts-ignore
// const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
