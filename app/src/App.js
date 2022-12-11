import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./login/index";
import SignUp from "./signup/index";
import Survey from "./survey/index";
import Main from "./main/index";
import Community from "./community/index";
import Post from "./post/index";
import PostDetails from "./postDetails/index";
import StarWars from "./movieDetails/sf/starwars";
import Alien from "./movieDetails/sf/alien";
import Planetoftheapes from "./movieDetails/sf/planetoftheapes";
import Thematrix from "./movieDetails/sf/thematrix";
import Onedollarlawyer from "./movieDetails/drama/onedollarlowyer";
import Lacasadepapel from "./movieDetails/drama/lacasadepapel";
import Stoveleague from "./movieDetails/drama/stoveleague";
import Thegoldenspoon from "./movieDetails/drama/thegoldenspoon";
import Rebornrich from "./movieDetails/drama/rebornrich";
import Annabelle from "./movieDetails/horror/annabelle";
import Theconjuring from "./movieDetails/horror/theconjuring";
import Thenun from "./movieDetails/horror/thenun";
import It from "./movieDetails/horror/it";
import Chainsawman from "./movieDetails/animation/chainsawman";



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
      <Route exact path="/movie/sf/starwars" element={<StarWars />} />
      <Route exact path="/movie/sf/alien" element={<Alien />} />
      <Route
        exact
        path="/movie/sf/planetoftheapes"
        element={<Planetoftheapes />}
      />
      <Route exact path="/movie/sf/thematrix" element={<Thematrix />} />
      <Route
        exact
        path="/movie/drama/onedollarlawyer"
        element={<Onedollarlawyer />}
      />
      <Route
        exact
        path="/movie/drama/lacasadepapel"
        element={<Lacasadepapel />}
      />
      <Route exact path="/movie/drama/stoveleague" element={<Stoveleague />} />
      <Route exact path="/movie/drama/thegoldenspoon" element={<Thegoldenspoon />} />
      <Route exact path="/movie/horror/annabelle" element={<Annabelle />} />
      <Route exact path="/movie/horror/theconjuring" element={<Theconjuring />} />
      <Route exact path="/movie/horror/thenun" element={<Thenun />} />
      <Route exact path="/movie/horror/it" element={<It />} />
      <Route exact path="/movie/drama/rebornrich" element={<Rebornrich />} />
      <Route exact path="/movie/animation/chainsawman" element={<Chainsawman />} />
    </Routes>
  );
}

export default App;
