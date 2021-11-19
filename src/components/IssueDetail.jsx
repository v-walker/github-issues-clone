import React from "react";
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

function IssueDetail() {
    const {issue_number} = useParams();
    const [issue, setIssue] = useState([])
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

    // useEffect(() => {
    //     console.log(issue);
    // }, [issue]);

    return (
        <div>
            <h2>{issue.title} #{issue_number}</h2>
            <p>{issue.user.login} opened this issue at {issue.created_at} • {issue.comments} comments </p>

            <img src={issue.user.avatar_url} alt={`avatar for ${issue.user.login}`} />
            
        </div>
    )
}

export default IssueDetail
