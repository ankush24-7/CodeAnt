import React, { useState } from "react";
import "./styles/animations.css";
import "./styles/media-query.css";
import "./assets/fonts/inter.css";
import SignIn from "./pages/SignIn";
import Repositories from "./pages/Repositories";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import AICodeReview from "./pages/AICodeReview";
import CloudSecurity from "./pages/CloudSecurity";
import HowToUse from "./pages/HowToUse";
import Settings from "./pages/Settings";
import Support from "./pages/Support";

const App = () => {
  return (
    <Router>
      <div className="h-dvh w-full antialiased">
        <Routes>
          <Route path="/" element={<Repositories />} />
          <Route path="/code-review" element={<AICodeReview />} />
          <Route path="/cloud-security" element={<CloudSecurity />} />
          <Route path="/how-to-use" element={<HowToUse />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/support" element={<Support />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
