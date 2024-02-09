import React from 'react';
import SignInPage from './pages/SignInPage'; // SignInPage コンポーネントをインポート
import Header from './Header';
import ToDoApp from "./components/ToDoApp";
import './App.css';
/* import logo from './logo.svg'; */


function App() {
  return (
    <div classname="App">
      <Header />
      <header className="App-header">
        <h1>React & Firebase 認証デモ</h1>
      </header>
      <SignInPage /> {/*サインインページを表示 */}
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
