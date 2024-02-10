import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Sidebar from "./components/sidebar/Sidebar";
import SignInPage from './pages/SignInPage';
import ToDoApp from "./pages/ToDoApp";
import MyDoneList from './pages/MyDoneList';
import OtherUsersToDo from './pages/OtherUsersToDo.jsx';
import UserInfo from './pages/UserInfo';

import { useAuth } from './contexts/AuthContext';

function App() {
  const { currentUser, loading } = useAuth();
  if (loading) {
    return <div>Loading...</div>; // ローディング中はローディングインジケータを表示
  }

  return (
    <div className="App">
      {currentUser ? (
      // 一つの親要素でラップ
      <>
      <Sidebar />
      <Routes>
        <Route path="/Enjoy_Todolist/" element={<ToDoApp />} />
        <Route path="/Enjoy_Todolist/my_done_list" element={<MyDoneList />} />
        <Route path="/Enjoy_Todolist/other_users_todo" element={<OtherUsersToDo />} />
        <Route path="/Enjoy_Todolist/user_info" element={<UserInfo />} />
      </Routes>
      </>
      ) : (
        <SignInPage />
      )}
    </div>
  );
}

export default App;
