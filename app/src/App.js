import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Login from "./login/index";
import SignUp from "./signup/index";
import Survey from "./survey/index";
import Main from "./main/index";
import Community from "./community/index";
import Post from "./post/index";
import PostDetails from "./postDetails/index";
import StarWars from "./movieDetails/starwars";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/survey" component={Survey} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/community" component={Community} />
        <Route exact path="/post" component={Post} />
        <Route exact path="/details" component={PostDetails} />
        <Route exact path="/movie/starwars" component={StarWars} />
      </Router>
    </div>
  );
}

export default App;
