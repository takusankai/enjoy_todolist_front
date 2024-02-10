import React from "react";

export const Header = ({ userName }) => (
  <div>
    <div className="ui container">
      <h1 class="ui center aligned header">
        <i class="large icons">
          <i class="green running icon"></i>
          <i class="inverted corner add icon"></i>
        </i>
        { userName } の達成リスト
      </h1>
    </div>
    <div className="ui hidden divider"></div>
  </div>
);