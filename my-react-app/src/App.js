import React from 'react';
import SignInPage from './pages/SignInPage'; // SignInPage コンポーネントをインポート
import Header from './Header';
import ToDoApp from "./components/ToDoApp";
import './App.css';
import Sidebar from "./components/sidebar/Sidebar";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import TODOList from './pages/TODOList';
import OtherUsersToDo from './pages/OtherUsersToDo.jsx';
import UserInfo from './pages/UserInfo';
import Settings from './pages/Settings';

function App() {
  return (
    <div classname="App">
      {/* <Header />
      <header className="App-header">
        <h1>React & Firebase 認証デモ</h1>
      </header> */}
      <Sidebar />
      <Routes>
        <Route path="/login" element={<SignInPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/other_users_todo" element={<OtherUsersToDo />} />
        <Route path="/user_info" element={<UserInfo />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;

/*
function App() {
  return (
    <div className="container is-fluid">
      <ToDoApp />
    </div>
  );
}

export default App;
{
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Login />
        {/*
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          src/app.jsを編集しaaて保存してください。
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
    </div>
  );
};
}*/
