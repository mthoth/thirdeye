import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Manifesto from "./pages/Manifesto";
import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import Resources from "./pages/Resources";
import OthersLikeUs from "./pages/OtherLikeUs";
import BacktoTop from "./BacktoTop";
function Webpages()
{


    return (
      <Router>
        <BacktoTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Manifesto" element={<Manifesto />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Resources" element={<Resources />} />
        <Route path="/Others" element={<OthersLikeUs />} />
      </Routes>
    </Router>
    );
}

export default Webpages;