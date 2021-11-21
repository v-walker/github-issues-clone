import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import UserPanel from './UserPanel';
import Repo from './Repo';


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

// Name
// Link
// Description (if any)
// Primary Language
// Stars Count
// Watch Count
// Fork Count

    return (
        <div className="container-fluid mt-5 row d-flex justify-content-center">
            <div className="col-11 row d-flex justify-content-center">
                <UserPanel className="col-3" name={user.name} username={user.login} avatar={user.avatar_url} bio={user.bio} company={user.company} location={user.location} website={user.blog} followers={user.followers} following={user.following} />
                
                <div className="col-9 row">
                    <hr />
                    {repos.map((repo, index) => {
                        let langColor = "";
                        if (repo.language === "JavaScript") {
                            langColor = "#fcf003"
                        } else if (repo.language === "HTML") {
                            langColor = "#fc6203"
                        } else if (repo.language === "EJS") {
                            langColor = "#fc0349"
                        } else if (repo.language === "Python") {
                            langColor = "#2f7dcc"
                        } else {
                            langColor = "#222324"
                        }

                        return(
                            <Repo key={index} name={repo.name} link={repo.git_url} description={repo.description} primaryLang={repo.language} langColor={langColor} starCount={repo.stargazers_count} watchCount = {repo.watchers_count} forkCount = {repo.forks_count} updatedDate = {repo.updated_at}/>
                        )
                    })}
                </div>
            </div>
            
        </div>
    )
}

export default Users
