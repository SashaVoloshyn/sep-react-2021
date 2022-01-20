import React from "react";

import './App.css';
import {Route, Routes, Navigate} from "react-router-dom";
import {Layout} from "./components/Layout/Layout";
import {
    AlbumsPage, PhotoPage,
    PostCommentsPage,
    PostDetailsPage,
    PostsPage,
    UserDetailsPage,
    UserPostsPage,
    UsersPage
} from "./pages";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Navigate to={'users'}/>}/>

                    <Route path={'/users'} element={<UsersPage/>}>

                        <Route path={':id'} element={<UserDetailsPage/>}>
                            <Route path={'posts'} element={<UserPostsPage/>}/>
                        </Route>

                        <Route path={':id/albums'} element={<AlbumsPage/>}>
                            <Route path={':albumsId/photos'} element={<PhotoPage/>}/>
                        </Route>

                    </Route>

                    <Route path={'/posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<PostDetailsPage/>}>
                            <Route path={'comments'} element={<PostCommentsPage/>}/>
                        </Route>
                    </Route>

                </Route>
            </Routes>
        </div>
    );
}

export default App;
