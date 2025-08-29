import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import TopNav from "./RoutesPractise/TopNav";
import { BrowserRouter, Routes , Route} from "react-router-dom";
import HomeTop from "./RoutesPractise/HomeTop";
import NotFound from "./RoutesPractise/NotFound";
import AboutPage from "./RoutesPractise/AboutPage";
// import FormData from "./Form Data/FormData";
// import GetApi from "./Api's Data/GetApi";
// import Display from "./Api's/Display";
// import Navbar from "./Pages/Navbar";
// import Home from "./Pages/Home";
// import ApiCards from "./ApiCards";

function App() {

  // let age = parseInt(prompt("Enter your age"));
  // let a;
  // a =   {age <= 20 ? (a = "child") : (a = " young")} 
  return (
    <>
  <BrowserRouter>
  <TopNav/>
  <Routes>
    <Route path="/home" element={<HomeTop/>}/>
    <Route path="/" element={<HomeTop/>}/>
    <Route path="/about" element={<AboutPage/>}/>
    <Route path="*" element={ <NotFound/>}/>
  </Routes>
  </BrowserRouter>
    {/* <FormData/> */}
      {/* <Navbar /> 
      <Home/> */}
      {/* <ApiCards/> */}
      {/* <Display/> */}
      {/* <GetApi logo = "coder"/> */}
    </>
  );
}

export default App;
