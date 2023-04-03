import "./App.css";
import {} from "semantic-ui-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {} from "semantic-ui-react";
import MainPage from "./component/mainPage";
import Login from "./component/Login"
import SignUp from "./component/signup"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
        </Routes>
      </div>
      
    </BrowserRouter>

  );
}

export default App;