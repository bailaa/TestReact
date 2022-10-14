import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = (props) => {

    /*let postsData = [
        {id: 1, message: 'Hi, how are you?', likeCounter: '15'},
        {id: 2, message: 'It is my first post', likeCounter: '20'}
    ]*/

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Nav />
                <div className='app-wrapper-content'>
                    <Routes>
                        {/*<Route path='/dialogs' element={<Dialogs />} />
                        <Route path='/profile' element={<Profile />} />*/}

                        {/*<Route path='/dialogs' render={ () => <Dialogs /> } />
                        <Route path='/profile' render={ () => <Profile /> } />*/}

                        <Route path={'/dialogs/*'} element={<Dialogs messagesData={props.messagesData} dialogsData={props.dialogsData}/>}/>
                        <Route path={'/profile/*'} element={<Profile postsData={props.postsData}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
