import { Routes, Route } from "react-router-dom";

import "./App.css";
import LandingPage from "./pages/landingPage";
import SignUpPage from "./pages/signUpPage";
import ChoosePerson from "./pages/choosePerson";
import Dashboard from "./pages/main_dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/chooseperson" element={<ChoosePerson />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/main_dashboard_answer" element={<Dashboard_Answer />} /> */}
        {/* <Route path="/main_dashboard_answer" element={<Dashboard_Answer />} /> */}
        {/* <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/payment" element={<PaymentPage />} />
        ------------------- Can add more routes here --------------------- */}
      </Routes>

      {/* <Dashboard_Answer /> */}
      {/* <Quiz /> */}
    </div>
  );
}

export default App;
