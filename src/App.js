import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisForm from "./RegistrationForm_customHook";
import TimerComponent from "./Set,Pause,ResetTimer";
import SearchList from "./Movies_Searchlist_Debounce";
import Rating from "./Star_Rating";
import PasswordStrength from "./PasswordStrength";
import DisplayComponent from "./ProgressBar";
import GridLights from "./3*3GridLights";
import NavBar from "./NavBar";
import { BackGroundChanger } from "./BackGround-Changer/BackGroundChanger"; // Importing the context provider
import TrafficLights from "./Traffic-Lights";
import Tabs from "./BasicTabs/Tabs";
import Clock from "./DigitalClock/Clock";

// import NotFound from './NotFound';

const App = () => {
  return (
    <BackGroundChanger>
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route exact path="/" element={<RegisForm />} />
          <Route path="/timer" element={<TimerComponent />} />
          <Route path="/search" element={<SearchList />} />
          <Route path="/Rating" element={<Rating />} />
          <Route path="/passwordStrength" element={<PasswordStrength />} />
          <Route path="/progressBar" element={<DisplayComponent />} />
          <Route path="/lights" element={<GridLights />} />
          <Route path="/trafficLights" element={<TrafficLights />} />
          <Route path="/tabs" element={<Tabs />} />
          <Route path="/clock" element={<Clock />} />
        </Routes>
      </Router>
    </BackGroundChanger>
  );
};

export default App;
