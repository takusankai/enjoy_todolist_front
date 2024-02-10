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
import { useAuth } from './contexts/AuthContext';

function App() {
  const { currentUser, loading } = useAuth();
  if (loading) {
    return <div>Loading...</div>; // ローディング中はローディングインジケータを表示
  }
  //ここより下はこんふり解決してください
  return (
      <div className="App">
        {currentUser ? (
        // 一つの親要素でラップ
        <>
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
        </>
        ) : (
          <SignInPage />
        )}
      </div>
  );
}

export default App;
