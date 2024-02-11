import React from "react";

export const MessageContainer = ({comment, postDate}) => (
  <div>
    <div className="ui big message">
        { comment }
    </div>
    <div className="ui compact menu">
      <div className="item">
        <i class="pink like icon"></i>Like
        <div className="left floating ui pink label">22</div>
      </div>
      <div className="item">
        <i className="orange clock icon"></i>
        { postDate }
      </div>
    </div>
    <div className="ui hidden divider"></div>
    <div className="ui hidden divider"></div>
  </div>
);