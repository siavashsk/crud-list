import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import UserList from "./components/userList";
import Sample from "./components/sample";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/sample" element={<Sample />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
