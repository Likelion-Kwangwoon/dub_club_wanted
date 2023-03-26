import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from "axios";
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

// axios.defaults.baseURL="";
axios.defaults.withCredentials = true;

// express server 
const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
dotenv.config();

app.listen (process.env.PORT, () => {
    console.log('server is on ${process.env.PORT;}')

})
const accessToken = (req, res) => {

};

const refreshToken = (req, res) => {

};

const loginSuccess = (req, res) => {
    try {
        const token = req.cookies.accessToken;
        const data = jwt.verify(token, process.env.ACCESS_SECRET);

        const userData = userDatabase.filter(item =>{
            return item.email === data.email;
        })[0];

        res.status(200).json(userData);
    } catch (error) {
        res.status(500).json(error);
    }
};

const logout = (req, res) => {

 
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
