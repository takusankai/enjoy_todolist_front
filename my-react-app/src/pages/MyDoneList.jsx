import React from 'react';
import "./MyDoneList.css";
import { Header } from "../components/MyDoneList/Header";
import { MessageContainer } from "../components/MyDoneList/MessageContainer";

function MyDoneList()
{
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

  const userName = userDetails[0].username

  return (
    <div className="OtherUsersToDo">
      <Header 
        userName = {userName}
      />
      {userDetails.map((user, index) => (
        <MessageContainer
          key      = {index}
          userName = {user.username}
          comment  = {user.comment}
          postDate = {user.post_date}
        />
      ))}
    </div>
  );
}

export default MyDoneList;