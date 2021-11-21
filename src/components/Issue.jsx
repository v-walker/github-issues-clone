import React from 'react';
// eslint-disable-next-line no-unused-vars
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

function Issue(props) {
    let {title, issueNum, date, username, label} = props;

    return (
        <Card>
            <Card.Body>
                <Link className="h5" to={`/issue/${issueNum}`}>
                    {title}
                </Link>
                <span className="ms-2">{label}</span>
                <Card.Text>
                    #{issueNum} opened {date} by <Link to={`/users/${username}`}>{username}</Link>
                </Card.Text>
                
            </Card.Body>
        </Card>
    )
}

export default Issue;
