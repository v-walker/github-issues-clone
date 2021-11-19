import React from 'react'
import {useState, useEffect} from 'react';

function  UserSearch() {
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState("");
    const [user, setUser] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUsersArray = [...users];
        

        const getUserData = async () => {
            let response = await fetch(`https://api.github.com/users/${username}`);
            let data = await response.json();
            setUser(data);
        }

        getUserData();
        newUsersArray.push(user);
        setUsers(newUsersArray);
    }

    useEffect(() => {
        console.log(users);
    }, [users]);

    return (
        <div>
            {/* Search form here */}
            <form onSubmit={handleSubmit}>
                <h2>Search for a User</h2>
                <input type="search" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <input type="submit" />
                <br />
                <br />
                <h2>Results</h2>
                {/* User Cards Here */}
            </form>
        </div>
    )
}

export default UserSearch;
