import React from "react";
import { SidebarData } from "./SidebarData";
import "./Sidebar.css";
import { getAuth } from 'firebase/auth';
import { firebaseApp } from '../../firebase/firebaseConfig';

function Sidebar() {
  return (
    <div className="Sidebar">
      <h1 id="SidebarTitle">Enjoy<br/>Todolist</h1>
      <ul className="SidebarList">
        {SidebarData.map((value, key) => {
          return (
            <li
              key={key}
              id={window.location.pathname == value.link ? "active" : ""}
              className="row"
              onClick={() => {
                window.location.pathname = value.link;
              }}
            >
              <div id="icon">{value.icon}</div>
              <div id="title">{value.title}</div>
            </li>
          );
        })}
      </ul>
      {/* ボタンを押したらcheckLogOutコンポーネントを開く */}
      <button className="small ui button" onClick={checkLogOut}>
        ログアウト</button>
    </div>
  );
}

function checkLogOut() {
  // ログアウトするか確認する
  if (window.confirm("ログアウトしますか？")) {
    // ログアウトする
    getAuth(firebaseApp).signOut()
  }
}

export default Sidebar;
