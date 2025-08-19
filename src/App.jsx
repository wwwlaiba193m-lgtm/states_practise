import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";

function App() {

  // let age = parseInt(prompt("Enter your age"));
  // let a;
  // a =   {age <= 20 ? (a = "child") : (a = " young")} 
  return (
    <>
      <Navbar />
      <Home/>
    </>
  );
}

export default App;
