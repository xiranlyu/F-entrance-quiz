import React from 'react';
import './Group.css';

class Group extends React.Component {
  render = () => {
    return (
      <div className="group">
        <div className="header">
          <h1>分组列表</h1>
          <p className="group-button">分组学员</p>
        </div>
        <div className="group-table">
          <table className="table">
            {/* <thead>1 组</thead> */}
            {/* <tbody>成吉思汗</tbody> */}
          </table>
        </div>
      </div>
    );
  };
}

export default Group;
