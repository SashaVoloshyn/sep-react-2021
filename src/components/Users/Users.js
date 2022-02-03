import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {User} from "../User/User";
import {getAllUsers} from "../../store/userSlice";

const Users = () => {
    const {users,status,error} = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllUsers())
    },[])

    return (
        <div>
            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};