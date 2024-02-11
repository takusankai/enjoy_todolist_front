import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import "./MyDoneList.css";
import { Header } from "../components/MyDoneList/Header";
import { MessageContainer } from "../components/MyDoneList/MessageContainer";

function MyDoneList()
{
  const { currentUser } = useAuth()

  // ↓ バックエンドからデータをもらう処理。データベース接続に成功したらコメントアウトして試す。
  //const userDetails = getUserTodos()

  const userDetails = [
    {
      "username": "JohnDoe",
      "comment": "This is a large step!",
      "post_date": "2024-02-10T12:30:00"
    },
    {
      "username": "JaneSmith",
      "comment": "Getting to starting!",
      "post_date": "2024-02-10T13:45:00"
    },
    {
      "username": "BobJohnson",
      "comment": "Running App!",
      "post_date": "2024-02-10T14:20:00"
    }
  ];

  return (
    <div className="MyDoneList">
      <Header 
        userName = {currentUser.displayName}
      />
      {userDetails.map((user, index) => (
        <MessageContainer
          key      = {index}
          userName = {currentUser.displayName}
          comment  = {user.comment}
          postDate = {user.post_date}
        />
      ))}
    </div>
  );
}

function getUserTodos() 
{
  fetch("http://localhost:5000/completed_todos", {
    method: "GET",
    credentials: "include", // サーバー側でユーザーの認証情報を参照できるようにしておく
    headers: {
      "Content-Type": "application/json", // JSONデータで渡してもらう
    },
  })
    .then((response) => response.json())
    .then((datas) => {
      const jsonData = datas.map(data => ({
        // 「フロントでの変数名 : バックでの変数名」に map 変換
        userName   : data.username,
        todoName   : data.TodoName,
        clearTime : data.ClearTime,
      }));
      return jsonData;
    })
    .catch((error) => {
      console.log("error in function getUser : " + error)
    });
}

export default MyDoneList;