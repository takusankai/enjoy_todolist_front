import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import "./MyDoneList.css";
import { Header } from "../components/MyDoneList/Header";
import { MessageContainer } from "../components/MyDoneList/MessageContainer";

function MyDoneList()
{
  const { currentUser } = useAuth()

  // ↓ バックエンドからデータをもらう処理。データベース接続に成功したらコメントアウトして試す。
  //const userDetails = getUserDones()

  const userDetails = [
    {
      "todoContent": "This is a large step!",
      "completedAt": "2024-02-10T12:30:00"
    },
    {
      "todoContent": "Getting to starting!",
      "completedAt": "2024-02-10T13:45:00"
    },
    {
      "todoContent": "Running App!",
      "completedAt": "2024-02-10T14:20:00"
    }
  ];

  return (
    <div className="MyDoneList">
      <Header 
        userName = {currentUser.displayName}
      />
      {userDetails.map((user) => (
        <MessageContainer
          comment  = {user.todoContent}
          postDate = {user.completedAt}
        />
      ))}
    </div>
  );
}

function getUserDones() 
{
  fetch("http://localhost:5000/completed_todos", 
  {
    method      : "GET",
    credentials : "include", // サーバー側でユーザーの認証情報を参照できるようにしておく
    headers     : {"Content-Type": "application/json", },// JSONデータで渡してもらう
  })
    .then((response) => response.json())
    .then((datas) => {
      const jsonData = datas.map(data => ({
        // 「フロントエンドでの変数名 : バックエンドでの変数名」に map 変換
        todoContent : data.TodoName,
        completedAt : data.ClearTime,
      }));
      return jsonData;
    })
    .catch((error) => {
      console.log("error in function getUser : " + error)
    });
}

export default MyDoneList;