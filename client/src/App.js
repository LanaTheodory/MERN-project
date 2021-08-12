import "./App.css";
import Header from "./components/login/Header";
import Registeration from "./views/Registeration";
// import PostComment from './components/PostComponent/Post';
import { Router } from '@reach/router';
import MainPage from './views/MainPage';
import AboutAXSOS from "./components/aboutAxsos/AboutAXSOS";
// import { Slider } from "@material-ui/core";
import ImagesSlider from "./components/aboutAxsos/ImagesSlider";
function App() {
  return (
    <div className="App">
<<<<<<< HEAD
     {/* <Router>
      <Registeration path="/register" />
      <Header path="/" pageTitle="Axsos" />
       <MainPage path="/"></MainPage>
     </Router> */}
     {/* <ImagesSlider/> */}
     <AboutAXSOS/>
     {/* <Header/> */}
=======
      {/* <Registeration /> */}
   
     

     <Router>
      <Registeration path="/register" />
      <Header path="/" pageTitle="Axsos" />
       <MainPage path="/"></MainPage>
     </Router>
     <Header/>
   
>>>>>>> 897121d064c9589ccc4e51e6956b544a2f218c35
    </div>
  );
}

export default App;
