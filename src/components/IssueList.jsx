import React from 'react';
import Issue from './Issue';

function IssueList(props) {
    let issues = props.issues;
    

// Title (link to issue on github.com)
// Issue Number
// Date created
// Username (link to user profile on github.com)
    return (
        <>
        {issues.map((issueObj, index) => {
            // let labelObj = issueObj.labels[0]
            let label = null;
            // console.log(labelObj);
            console.log(issueObj.labels[0]);
            try {
                label = issueObj.labels[0].name
            } catch (err) {

            }
            
            return(
                <div key={index}>
                    <Issue title={issueObj.title} issueNum={issueObj.number} date={issueObj.created_at} username={issueObj.user.login} label={label}  />
                </div>
            )
        })}
            
        </>
    )
}

export default IssueList
