import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
let postsData = [
    {id: 1, message: 'Hi, how are you?', likeCounter: '15'},
    {id: 2, message: 'It is my first post', likeCounter: '20'}
]

let dialogsData = [
    {id: 1, name: 'Prue'},
    {id: 2, name: 'Piper'},
    {id: 3, name: 'Phoebe'},
    {id: 4, name: 'Paige'}
]

let messagesData = [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'How is your study?!'},
    {id: 3, message: 'We have to kill Cole'}
]

root.render(
  <React.StrictMode>
    <App postsData={postsData} messagesData={messagesData} dialogsData={dialogsData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
