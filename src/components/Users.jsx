import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import UserPanel from './UserPanel';
// import Repo from './Repo';


function Users() {
    const {username} = useParams();
    const [user, setUser] = useState({});
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const getUserandRepoData = async () => {
            try {
                let response = await fetch(`https://api.github.com/users/${username}`);
                let userData = await response.json();
                setUser(userData);
                let response2 = await fetch(`https://api.github.com/users/${username}/repos`);
                let repoData = await response2.json();
                setRepos(repoData);

            } catch (err) {
                console.log(err);
            }
        }

        getUserandRepoData();

    }, []);

    useEffect(() => {
        console.log(user);
        console.log(repos);
    }, [user, repos])
    

//     Login Name
// Display Name (if available)
// Avatar
// Bio
// Company
// Location
// Website (aka blog)

    return (
        <div className="container-fluid row d-flex justify-content-center">
            <UserPanel className="col-2" name={user.name} username={user.login} avatar={user.avatar_url} bio={user.bio} company={user.company} location={user.location} website={user.blog} followers={user.followers} following={user.following} />
            {/* <Repo /> */}
        </div>
    )
}

export default Users
