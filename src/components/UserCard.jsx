import React from 'react';
// eslint-disable-next-line no-unused-vars
import Card from "react-bootstrap/Card";
import {Link} from 'react-router-dom';

function UserCard(props) {
    let {avatar, username, name, location, reposLink} = props;
    
    return (
        <Card>
            <Card.Body>
                {/* avatar, username, user details */}
                <img className="avatar" src={avatar} alt={`avatar for ${username}`} />
                <Link to={`/users/${username}`}>{username}</Link>
                <hr />
                Name: {name} <br />
                Location: {location} <br />
                Repositories: <a href={reposLink}>{reposLink}</a>
            </Card.Body>
        </Card>
    )
}

export default UserCard
