import React from 'react'
import "./UserInfo.css"
import { Header } from "../components/UserInfo/Header";
import { UserInfoContainer } from "../components/UserInfo/UserInfoContainer";

function UserInfo() 
{
  const userDetails = [
    {
      "username": "JohnDoe",
      "clearNum": 10
    }
  ];

  const motivaMessage = ["やる気だせよ ！！！","君は太陽だ　！！！"]

  return (
    <div className="UserInfo">
      <Header />
      <UserInfoContainer 
        userName = {userDetails[0].username}
        clearNum = {userDetails[0].clearNum}
        motivaMessage = "やる気だせよ ！！！"
      />
    </div>
  )
}

export default UserInfo
