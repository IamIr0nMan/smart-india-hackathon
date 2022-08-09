import { Routes, Route } from "react-router-dom";

import "./App.css";
import LandingPage from "./pages/landingPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/payment" element={<PaymentPage />} />
        ------------------- Can add more routes here --------------------- */}
      </Routes>
    </div>
  );
}

export default App;
