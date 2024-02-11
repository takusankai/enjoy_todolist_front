import "./OtherUsersToDo.css";
import { Header } from "../components/OtherUsersTodo/Header";
import { MessageContainer } from "../components/OtherUsersTodo/MessageContainer";

function OtherUsersToDo() 
{
  //const userDetails = getUser()

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
    },
    {
      "username": "AliceWilliams",
      "comment": "I agree with the points raised!",
      "post_date": "2024-02-10T15:10:00"
    },
    {
      "username": "CharlieBrown",
      "comment": "Looking forward to more posts!",
      "post_date": "2024-02-10T16:05:00"
    },
    {
      "username": "EvaMiller",
      "comment": "Great insights! Keep it up!",
      "post_date": "2024-02-10T17:30:00"
    },
    {
      "username": "DavidLee",
      "comment": "Wonderful content!",
      "post_date": "2024-02-10T18:15:00"
    },
    {
      "username": "GraceTaylor",
      "comment": "I learned a lot from this post!",
      "post_date": "2024-02-10T19:20:00"
    },
    {
      "username": "SamuelClark",
      "comment": "Interesting perspectives!",
      "post_date": "2024-02-10T20:00:00"
    },
    {
      "username": "OliviaSmith",
      "comment": "Thanks for the informative post!",
      "post_date": "2024-02-10T21:10:00"
    }
  ];


  return (
    <div className="OtherUsersToDo">
      <Header />
      {userDetails.map((user, index) => (
        <MessageContainer
          key={index}
          userName={user.username}
          comment={user.comment}
          postDate={user.post_date}
        />
      ))}
    </div>
  );
}

function getUser() 
{
  fetch("http://localhost:5000/recent_todos", {
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
        createTime : data.ClearTime,
      }));
      return jsonData;
    })
    .catch((error) => {
      console.log("error in function getUser : " + error)
    });
}

export default OtherUsersToDo;