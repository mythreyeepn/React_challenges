import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisForm from "./RegistrationForm_customHook";
import TimerComponent from "./Set,Pause,ResetTimer";
import SearchList from "./Movies_Searchlist_Debounce";
import Rating from "./Star_Rating";
import PasswordStrength from "./PasswordStrength";
// import NotFound from './NotFound';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<RegisForm />} />
        <Route path="/timer" element={<TimerComponent />} />
        <Route path="/search" element={<SearchList />} />
        <Route path="/Rating" element={<Rating />} />
        <Route path="/passwordStrength" element={<PasswordStrength />} />
      </Routes>
    </Router>
  );
};

export default App;
