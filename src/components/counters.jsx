import React, { Component } from "react";

class Counter extends Component {
  state2 = {
    tags: ["learn react", "complete week 4 on coursera", "start ML"]
  };
  state = {
    count: this.state2.tags.length
  };
  styles = {
    fontSize: 20,
    fontWeight: "bold"
  };

  renderTags() {
    if (this.state2.tags.length === 0) return <p>you todo list is empty</p>;

    return (
      <ul>
        {this.state2.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <span style={this.styles} className={this.getBadgeMethod()}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Add</button>
        {this.state2.tags.length === 0 && "please add items to your todo list"}
        {this.renderTags()}
      </div>
    );
  }
  getBadgeMethod() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "No things TO do" : count;
  }
}

export default Counter;
