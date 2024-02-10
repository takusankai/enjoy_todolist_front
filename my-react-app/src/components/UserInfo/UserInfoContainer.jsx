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
      <div class="ui blue ribbon label">強い心を持つ そのためには 心の根</div>by 松岡修造
        <p>
          { motivaMessage }
        </p>
      </div>
  </div>
);