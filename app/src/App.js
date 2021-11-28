import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Login from "./login/index";
import SignUp  from "./signup/index";
import Survey from "./survey/index";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/survey" component={Survey} />
      </Router>
    </div>
  );
}

export default App;
