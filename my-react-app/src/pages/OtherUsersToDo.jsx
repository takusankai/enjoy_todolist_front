import "./OtherUsersToDo.css";
import { Header } from "../components/OtherUsersTodo/Header";
import { MessageContainer } from "../components/OtherUsersTodo/MessageContainer";

function OtherUsersToDo() 
{
  // ↓ バックエンドからデータをもらう処理。データベース接続に成功したらコメントアウトして試す。
  //const userDetails = getUserTodos()

  const userDetails = [
    {
      "userName": "JohnDoe",
      "todoContent": "This is a great post!",
      "createdAt": "2024-02-10T12:30:00"
    },
    {
      "userName": "JaneSmith",
      "todoContent": "Thanks for sharing!",
      "createdAt": "2024-02-10T13:45:00"
    },
    {
      "userName": "BobJohnson",
      "todoContent": "Interesting discussion!",
      "createdAt": "2024-02-10T14:20:00"
    },
    {
      "userName": "AliceWilliams",
      "todoContent": "I agree with the points raised!",
      "createdAt": "2024-02-10T15:10:00"
    },
    {
      "userName": "CharlieBrown",
      "todoContent": "Looking forward to more posts!",
      "createdAt": "2024-02-10T16:05:00"
    },
    {
      "userName": "EvaMiller",
      "todoContent": "Great insights! Keep it up!",
      "createdAt": "2024-02-10T17:30:00"
    },
    {
      "userName": "DavidLee",
      "todoContent": "Wonderful content!",
      "createdAt": "2024-02-10T18:15:00"
    },
    {
      "userName": "GraceTaylor",
      "todoContent": "I learned a lot from this post!",
      "createdAt": "2024-02-10T19:20:00"
    },
    {
      "userName": "SamuelClark",
      "todoContent": "Interesting perspectives!",
      "createdAt": "2024-02-10T20:00:00"
    },
    {
      "userName": "OliviaSmith",
      "todoContent": "Thanks for the informative post!",
      "createdAt": "2024-02-10T21:10:00"
    }
  ];


  return (
    <div className="OtherUsersToDo">
      <Header />
      {userDetails.map((user, index) => (
        <MessageContainer
          key={index}
          userName={user.userName}
          comment={user.todoContent}
          postDate={user.createdAt}
        />
      ))}
    </div>
  );
}


function getUserTodos() {

  return fetch("http://localhost:5000/recent_todos", {
    method      : "GET",
    credentials : "include", // サーバー側でユーザーの認証情報を参照できるようにしておく
    headers     : { "Content-Type": "application/json" }, // JSONデータで渡してもらう
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((datas) => {
      const jsonData = datas.map((data) => ({
        // 「フロントエンドでの変数名 : バックエンドでの変数名」に map 変換
        userName    : data.username,
        todoContent : data.TodoName,
        createdAt   : data.CreateTime,
      }));
      return jsonData;
    })
    .catch((error) => {
      console.error("Error in function getUserTodos:", error);
      throw error; // 例外を再スローして、呼び出し元でエラーを処理できるようにする
    });
}


export default OtherUsersToDo;