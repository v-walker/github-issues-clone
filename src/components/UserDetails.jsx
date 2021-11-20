import React from 'react';
import {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";

function UserDetails() {
    const {username} = useParams;
    // eslint-disable-next-line no-unused-vars
    const [userData, setUserData] = useState([]);


    useEffect(() => {
        const getUserData = async () => {
            let response = await fetch(`https://api.github.com/users/${username}`);
            let data = response.json();
            setUserData(data);
        }

        getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    
    return (
        <div>
            
        </div>
    )
}

export default UserDetails;
