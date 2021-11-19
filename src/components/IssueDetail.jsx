import React from "react";
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'
// eslint-disable-next-line no-unused-vars
import Card, {Body, Title, Text} from 'react-bootstrap/Card';
import '../issue.css';


function IssueDetail() {
    const {issue_number} = useParams();
    const [issue, setIssue] = useState([])
    const markdown = issue.body;
    // const navigate = useNavigate();

    useEffect(() => {
        const issueData = async () => {
            let response = await fetch(`https://api.github.com/repos/facebook/create-react-app/issues/${issue_number}`);
            let data = await response.json();
            setIssue(data);
        }

        issueData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        console.log(issue);
    }, [issue]);

    return (
        <div>
            <h2>{issue.title} #{issue_number}</h2>
            <p>{issue.user.login} opened this issue at {issue.created_at} • {issue.comments} comments </p>
            <hr></hr>

            <img className="avatar" src={issue.user.avatar_url} alt={`avatar for ${issue.user.login}`} />
            

            <Card>
            <Card.Body>
                <Card.Link className="" href="">{issue.user.login}</Card.Link>
                <span className="ms-2">commented at {issue.created_at}</span>
                <hr />
                <Card.Text>
                    <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
                </Card.Text>
                
            </Card.Body>
            </Card>

        </div>
    )
}

export default IssueDetail
