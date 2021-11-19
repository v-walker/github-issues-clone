import React from 'react';
import Issue from './Issue';

function IssueList(props) {
    let issues = props.issues;
    
    return (
        <>
            <Issue issues={issues} />
        </>
    )
}

export default IssueList
