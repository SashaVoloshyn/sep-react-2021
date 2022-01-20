import React, {useEffect, useState} from "react";

import './App.css';
import Users from "./components/userComponents/Users";
import Form from "./components/Form/Form";
import {userService} from "./services/user.service";

function App() {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        userService.getAll()
            .then(value =>{
                    setUsers(value);
                    setFilteredUsers(value)
            });
    }, []);
    
    const filter = (data) => {
        let filterArr = [...users];

        if (data.name) {
            filterArr = filterArr.filter(user => user.name.includes(data.name));
        }
        if (data.username) {
            filterArr = filterArr.filter(user => user.username.includes(data.username));
        }
        if (data.email) {
            filterArr = filterArr.filter(user => user.email.includes(data.email));
        }
        setFilteredUsers(filterArr);
    }

  return (
    <div className="App">
        <Form filter ={filter}/>
        <Users users={filteredUsers}/>
    </div>
  );
}

export default App;
