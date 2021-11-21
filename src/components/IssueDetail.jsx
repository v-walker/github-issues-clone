import React from "react";
import {useState, useEffect} from "react";
import {useParams, Link} from "react-router-dom";
import Markdown from "react-markdown";
import Card from 'react-bootstrap/Card';
import '../issue.css';


function IssueDetail() {
    const {issue_number} = useParams();
    const [singleIssue, setIssue] = useState([]);
    const [user, setUser] = useState({});
    const [markdown, setMarkdown] = useState("")

    useEffect(() => {
        const issueData = async () => {
            try {
                let response = await fetch(`https://api.github.com/repos/facebook/create-react-app/issues/${issue_number}`);
                let data = await response.json();
                setIssue(data);
                setUser(data.user);
                setMarkdown(data.body);
            } catch (err) {
                console.log(err);
            }
        }
        
        issueData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // useEffect(() => {
    //     console.log(singleIssue);
    // }, [singleIssue]);

    return (
        <div>
            <h2>{singleIssue.title} #{issue_number}</h2>
            <div><Link to={`/users/${user.login}`}>{user.login}</Link> opened this issue at {singleIssue.created_at} • {singleIssue.comments} comments </div>
            <hr></hr>

            <img className="avatar" src={user.avatar_url} alt={`avatar for ${user.login}`} />
            

            <Card>
            <Card.Body>
                <Link to={`/users/${user.login}`}>{user.login}</Link>
                <span className="ms-2">commented at {singleIssue.created_at}</span>
                <hr />
                {/* <Card.Text> */}
                    <Markdown>{markdown}</Markdown>
                {/* </Card.Text> */}
            </Card.Body>
            </Card>

        </div>
    )
}

export default IssueDetail;
