import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Sidebar from "./components/sidebar/Sidebar";
import SignInPage from './pages/SignInPage';
import Home from './pages/Home';
import ToDoApp from "./pages/ToDoApp";
import MyDoneList from './pages/MyDoneList';
import OtherUsersToDo from './pages/OtherUsersToDo.jsx';
import UserInfo from './pages/UserInfo';
import Settings from './pages/Settings';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<ToDoApp />} />
        <Route path="/my_done_list" element={<MyDoneList />} />
        <Route path="/other_users_todo" element={<OtherUsersToDo />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/user_info" element={<UserInfo />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
