import React from "react";

interface propInterface {
  count: number;
}

export class TaskFive extends React.Component<{}, propInterface> {
  constructor(props: {}) {
    super(props);
    this.state = { count: 0 };
    this.handleAddCount = this.handleAddCount.bind(this);
  }

  handleAddCount() {
    //this.state.count + 1 -> prevState.count + 1
    //handleAddCount 原本連續呼叫三次setState，而setState為非同步的操作，三次的setState可能會合併成一個操作，而非真的改變三次
    this.setState((prevState) => ({ count: prevState.count + 1 }));
    this.setState((prevState) => ({ count: prevState.count + 1 }));
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  render() {
    return (
      <div>
        <h3>Task Two - Fix State Count Code</h3>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleAddCount}>Add</button>
        <div className='footer'></div>
      </div>
    );
  }
}

export default TaskFive;
