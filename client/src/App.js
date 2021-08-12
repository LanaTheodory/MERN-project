import "./App.css";
import Header from "./components/login/Header";
import Registeration from "./views/Registeration";
// import PostComment from './components/PostComponent/Post';
import { Router } from "@reach/router";
import MainPage from "./views/MainPage";

// import { Slider } from "@material-ui/core";

function App() {
  return (
    //   {/* <Header/> */}
      <Router>
       <Registeration path="/register" />
        <MainPage path="/" />
      </Router>
  );
}

export default App;
