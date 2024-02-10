import React from "react";
import { SidebarData } from "./SidebarData";
import "./Sidebar.css";

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
        <button className="small ui button" onClick={() => window.location.pathname = "/Enjoy_Todolist/"}>ログアウト</button>
    </div>
  );
}

export default Sidebar;
