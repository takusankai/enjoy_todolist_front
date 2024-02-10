import React from "react";
import { Link, useLocation } from 'react-router-dom';
import { SidebarData } from "./SidebarData";
import "./Sidebar.css";
import { getAuth } from 'firebase/auth';
import { firebaseApp } from '../../firebase/firebaseConfig';

function Sidebar() {
  //現在のURLを取得
  const location = useLocation();

  return (
    <div className="Sidebar">
      <h1 id="SidebarTitle">Enjoy<br/>Todolist</h1>
      <ul className="SidebarList">
        {SidebarData.map((value, key) => {
            return (
              <li
                key={key}
                id={location.pathname === value.link ? "active" : ""}
                className="row"
              >
                <Link to={value.link}>
                  <div id="icon">{value.icon}</div>
                  <div id="title">{value.title}</div>
                </Link>
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
