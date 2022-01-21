import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams,Link} from "react-router-dom";

import {usersService} from "../../services/users.service";

const UserDetailsPage = () => {

    const {id} = useParams();
    const [user, setUser] = useState(null);
    const {state} = useLocation();

    useEffect(() => {
        if (state) {
            setUser(state);
            return
        }

        usersService.getById(id).then(value => setUser({...value}));
    },[id]);

    return (
        <div>
            {user &&

            (<div>
              <h4>Id : {user.id}</h4>
              <h2>Name : {user.name}</h2>
              <h2>Username :{user.username}</h2>
              <h3>Email : {user.email}</h3>
                <Link to={`posts`}><button>Posts</button></Link>
            </div>)}

            <Outlet/>
        </div>
    );
};

export {UserDetailsPage};