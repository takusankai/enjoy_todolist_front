import React from 'react';
import "./OtherUsersToDo.css";
import { MessageContainer } from "../components/OtherUsersTodo/MessageContainer";

function OtherUsersToDo() {
  const userDetails = [
    {
      "username": "JohnDoe",
      "comment": "This is a great post!",
      "post_date": "2024-02-10T12:30:00"
    },
    {
      "username": "JaneSmith",
      "comment": "Thanks for sharing!",
      "post_date": "2024-02-10T13:45:00"
    },
    {
      "username": "BobJohnson",
      "comment": "Interesting discussion!",
      "post_date": "2024-02-10T14:20:00"
    }
  ];

  return (
    <div className="OtherUsersToDo">
      {userDetails.map((user, index) => (
        <MessageContainer
          key={index}
          username={user.username}
          comment={user.comment}
          postDate={user.post_date}
        />
      ))}
    </div>
  );
}

export default OtherUsersToDo;
