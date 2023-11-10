import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path='/home' element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
