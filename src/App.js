import { Routes, Route } from "react-router-dom";

import "./App.css";
import LandingPage from "./pages/landingPage";
import SignUpPage from "./pages/signUpPage";
import ChoosePerson from "./pages/choosePerson";
import InvoicePage from "./pages/invoicePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/chooseperson" element={<ChoosePerson />} />
        <Route path="/payment" element={<InvoicePage />} />
        {/* <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/payment" element={<PaymentPage />} />
        ------------------- Can add more routes here --------------------- */}
      </Routes>
    </div>
  );
}

export default App;
