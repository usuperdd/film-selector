import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/signup" element={<SignUp />} />
      <Route exact path="/survey" element={<Survey />} />
      <Route exact path="/main" element={<Main />} />
      <Route exact path="/community" element={<Community />} />
      <Route exact path="/post" element={<Post />} />
      <Route exact path="/details" element={<PostDetails />} />
      <Route exact path="/movie/starwars" element={<StarWars />} />
    </Routes>
  );
}

export default App;
