import './App.css';
import {useState, useEffect} from "react";
import IssueList from './components/IssueList';


function App() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const issueData = async () => {
      let response = await fetch("https://api.github.com/repos/facebook/create-react-app/issues");
      let data = await response.json();
      setIssues(data);
    }

    issueData();

  }, [])

  useEffect(() => {
    console.log(issues);
  }, [issues]);

  
  return (
    <>
      <IssueList issues={issues} />
    </>
  );
}

export default App;
