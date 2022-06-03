import Header from "./components/header/Header"; 
import Home from "./pages/home/Home"
import SinglePost from "./components/singlePost/SinglePost";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import {
  BrowserRouter as Router,
  Routes,
  Route, 
} from "react-router-dom"

function App() {
  const user = false;
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/posts" element={<Home/>}></Route>
        <Route path="/login" element={user ? <Home /> : <Login />}></Route>
        <Route path="/register" element={user ? <Home /> : <Register />}></Route>
        <Route path="/write" element={user ? <Write /> : <Login />}></Route>
        <Route path="/settings" element={user ? <Settings /> : <Login />}></Route>
        <Route path="/post/:id" element={<SinglePost />}></Route>
      </Routes>
      </Router>
  );
}

export default App;
