import React from 'react';
import './Member.css';

class Member extends React.Component {
  render = () => {
    return (
      <div className="title">
        <h1>学员列表</h1>
        <div className="member_list">
          <p className="member">1. 成吉思汗</p>
        </div>
      </div>
    );
  };
}

export default Member;
