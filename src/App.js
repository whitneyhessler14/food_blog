import Header from "./components/header/Header"; 
import Home from "./pages/home/Home"
import SinglePost from "./components/singlePost/SinglePost";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  return (
    <>
      <Header/>
      <Register />
    </>
  );
}

export default App;
