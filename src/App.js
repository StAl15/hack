import react from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login/Login'
import Registration from './registration/Registration'
import ListConsultant from './list_consultant/ListConsultant'
import Profile from './profile/Profile'
import Chat from './chat/Chat'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/list_consultant" element={<ListConsultant />} />
      </Routes>
    </Router>

  );
}

export default App;