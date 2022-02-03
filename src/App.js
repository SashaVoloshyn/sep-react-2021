import React from "react";
import {Route,Routes ,Navigate} from "react-router-dom";

import './App.css';
import {CarsPage, CommentsPage, PostsPage, UsersPage} from "./Pages";
import {Layout} from "./components";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Navigate to={'cars'}/>}/>

                    <Route path={'/cars'} element={<CarsPage/>}/>

                    <Route path={'/users'} element={<UsersPage/>}/>

                    <Route path={'/posts'} element={<PostsPage/>}/>

                    <Route path={'/comments'} element={<CommentsPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
