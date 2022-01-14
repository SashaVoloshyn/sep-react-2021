import React, {useState} from 'react';

import {userService} from "../../services/user.service";
import UserDetails from "./UserDetails";

const User = ({item}) => {
    const [user,setUser] = useState(null);


    const getUserId = (id) => {
        userService.getById(id)
            .then(value => setUser(value));

    }


    return (
        <div className='user__info'>
            <div className='user'>
                <h4> {item.id} {item.name}
                    <button onClick={()=>getUserId(item.id)}>getId
                    </button>
                </h4>
            </div>
            <div className='user__details'>
                {user && <UserDetails details={user}/>}

            </div>
        </div>
    );
};

export default User;