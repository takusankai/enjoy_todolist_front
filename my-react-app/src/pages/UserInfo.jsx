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

  const doneTaskRecord = [
    0, 
    10, 
    30, 
    60, 
    100
  ]

  const motivaMessage  = [
    "やる気だせよ ！！！",
    "aaa",
    "bbb",
    "ccc",
    "君は太陽だ　！！！"
  ]

  return (
    <div className="UserInfo">
      <Header />
      <UserInfoContainer 
        userName = {userDetails[0].username}
        clearNum = {userDetails[0].clearNum}
        motivaMessage = { getAchievementNum(userDetails[0].clearNum, doneTaskRecord, motivaMessage) }
      />
    </div>
  )
}


function getAchievementNum(currrentClearNum, judgeDoneTaskRecord, motivaMessage) 
{
  for (let index = 0; index < judgeDoneTaskRecord.length; index++) {
    if (currrentClearNum <= judgeDoneTaskRecord[index]) {
      return motivaMessage[index];
    }
  }
  return "お前はマスターだ　！！！";
}


export default UserInfo
