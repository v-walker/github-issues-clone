import React from 'react';
import {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";

function UserDetails() {
    const {username} = useParams;
    const [userData, setUserData] = useState([]);


    useEffect(() => {
        const getUserData = async () => {
            let response = await fetch(`https://api.github.com/users/${username}`);
            let data = response.json();
            setUserData(data);
        }

        getUserData();
    }, [])
    
    
    return (
        <div>
            
        </div>
    )
}

export default UserDetails;
