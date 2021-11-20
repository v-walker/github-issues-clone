import React from 'react';
// eslint-disable-next-line no-unused-vars
import Card, {Body, Title, Text} from "react-bootstrap/Card";

function UserCard(props) {
    let {avatar, username, name, location, profileLink, reposLink} = props;
    
    return (
        <Card>
            <Card.Body>
                {/* avatar, username, user details */}
                <img className="avatar" src={avatar} alt={`avatar for ${username}`} />
                <a href={profileLink} >{username}</a> <hr />
                Name: {name} <br />
                Location: {location} <br />
                Repositories: <a href={reposLink}>{reposLink}</a>
            </Card.Body>
        </Card>
    )
}

export default UserCard
