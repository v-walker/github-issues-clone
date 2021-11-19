import React from 'react';
// eslint-disable-next-line no-unused-vars
import Card, {Body, Title, Text} from 'react-bootstrap/Card';

function Issue(props) {
    let {title, issueNum, date, username, userLink, label} = props;

    return (
        <Card>
            <Card.Body>
                <Card.Link className="h5" href={`/issue/${issueNum}`}>
                    {title}
                </Card.Link>
                <span className="ms-2">{label}</span>
                <Card.Text>
                    #{issueNum} opened {date} by <Card.Link href={userLink}>{username}</Card.Link>
                </Card.Text>
                
            </Card.Body>
        </Card>
    )
}

export default Issue;
