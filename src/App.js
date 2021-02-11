import './App.css';
import PolicyDetails from './components/PolicyDetails'
import {BrowserRouter as Router,Route} from 'react-router-dom'; 
 import PolicyyPage from './components/PolicyyPage'

function App() {
  return (
    
    <div >

      <Router>
        <div className="firstdiv">
        <Route exact path="/" component={PolicyyPage}/>
        </div>
        <Route exact path="/policydetails" component={PolicyDetails}/>
      </Router> 

    </div>
  );
}

export default App;
