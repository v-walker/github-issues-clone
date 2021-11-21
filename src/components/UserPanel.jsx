import React from "react";
import Card from "react-bootstrap/Card";


function UserPanel(props) {
    let {name, username, avatar, bio, company, location, website, followers, following} = props


    return (
        <Card className="" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={avatar} style={{ borderRadius: "50%"}}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{username}</Card.Subtitle>
                <Card.Text>
                {bio} 
                <br />
                {company} 
                <br />
                {location}
                <br />
                {website}
                <br />
                <b>{followers}</b> followers • <b>{following}</b> following
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default UserPanel
