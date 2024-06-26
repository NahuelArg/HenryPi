import { Route, Routes, useLocation } from "react-router-dom";
import About from "./components/About/About.jsx";
// import Detail from "./components/Detail/Detail.jsx"
import HomePage from "./components/HomePage/HomePage.jsx";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import DogDetails from "./components/Detail/Detail.jsx";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path = '/detail/:id' element= {<DogDetails/>}/>        
        {/* <Route path='/detail/:id' element={<Detail/>} /> */}
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
