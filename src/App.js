import './App.css';
import Home from "./components/Home/Home.jsx"
import Login from "./components/Login/Login.jsx"
import Navbar from "./components/Navbar/Navbar.jsx"
import Profile from "./components/Profile/Profile.jsx"
import SignUp from "./components/SignUp/SignUp.jsx"
import Smack from "./components/Smack/Smack.jsx"
import TalkSmack from "./components/TalkSmack/TalkSmack.jsx"

function App() {
  return (
    <div className="App">
      <Home />
      <Login />
      <Navbar />
      <Profile />
      <SignUp />
      <Smack />
      <TalkSmack />
    </div>
  );
}

export default App;
