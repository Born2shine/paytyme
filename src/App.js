import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {


  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/privacy_policy" element={<PrivacyPolicy/>}/>
      </Routes>
    </div>
  );
}

export default App;
