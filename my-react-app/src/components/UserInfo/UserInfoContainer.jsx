import React from "react";

export const UserInfoContainer = ({ userName, userEmail, clearNum, motivaMessage }) => (
  <div className="ui container">
    <div class="ui raised segment">
      <div class="ui red ribbon label">ユーザー情報</div>
      <p>{ userName }</p>
      <p>{ userEmail }</p>
      <p>達成数 : { clearNum }</p>
    </div>
    <div className="ui raised segment">
      <div class="ui blue ribbon label">この小さな一歩を……ただただ……積み重ねていけばいい……!</div>
        <div class="ui hidden divider"></div>
        <p>
          { motivaMessage }
        </p>
      </div>
  </div>
);