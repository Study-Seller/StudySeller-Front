import "./App.css";
import {} from "semantic-ui-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {} from "semantic-ui-react";
import MainPage from "./components/mainPage";
import Login from "./components/Login"
import SignUp from "./components/signup"
import WritePage from "./components/writePage"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/document" element={<WritePage/>} />
        </Routes>
      </div>
      
    </BrowserRouter>

  );
}

export default App;