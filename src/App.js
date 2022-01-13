import React from 'react';

import './App.css';
import Comments from './components/Comments';
import Users from './components/Users';
import Posts from './components/Posts';



function App() {

    return (
        <div className='wrap'>
            <div className="usersPosts">
                <div className="usersPosts__elements">
                    <Users/>
                </div>
                <div className="usersPosts__elements">
                    <Posts/>
                </div>
            </div>
            <Comments/>
        </div>
    );
}

export default App;
