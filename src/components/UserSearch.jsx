import React from 'react'
import {useState, useEffect} from 'react';
// eslint-disable-next-line no-unused-vars
import UserCard from './UserCard';
import '../user.css';

function  UserSearch() {
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState("");
    // eslint-disable-next-line no-unused-vars
    // const [user, setUser] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        const getUserData = async () => {
            let response = await fetch(`https://api.github.com/users/${username}`);
            let data = await response.json();
            // setUser(data);
            setUsername("")
            setUsers([...users, data]);
        }

        getUserData();
        
    }

    useEffect(() => {
        console.log("users:", users);
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
                <div>
                    {users.map((userObj, index) => {
                        return (
                        <UserCard key={index} 
                        avatar={userObj.avatar_url} 
                        username={userObj.login}
                        name={userObj.name}
                        location={userObj.location}
                        profileLink={userObj.html_url} 
                        reposLink={userObj.repos_url}  />)
                    })}
                </div>
            </form>
        </div>
    )
}

export default UserSearch;
