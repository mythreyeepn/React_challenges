import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisForm from "./RegistrationForm_customHook";
import TimerComponent from "./Set,Pause,ResetTimer";
// import Component2 from './Component2';
// import NotFound from './NotFound';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<RegisForm />} />
        <Route path="/timer" element={<TimerComponent />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
