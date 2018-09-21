import React, { Component } from "react";

class Counter extends Component {
  state2 = {
    tags: ["learn react", "complete week 4 on coursera", "start ML"]
  };
  state = {
    count: this.state2.tags.length + " things to do"
  };
  styles = {
    fontSize: 18,
    fontWeight: "bold"
  };

  renderTags() {
    if (this.state2.tags.length === 0) return <p>you todo list is empty</p>;

    return (
      <ol>
        {this.state2.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ol>
    );
  }

  render() {
    return (
      <div>
        <span style={this.styles} className={this.getBadgeMethod()}>
          {this.formatCount()}
        </span>
        <form>
          Add a target todo:
          <br />
          <input type="text" name="task" />
        </form>

        <button className="btn btn-secondary btn-sm m-2">Add</button>
        <button className="btn btn-secondary btn-sm">Delete</button>
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
