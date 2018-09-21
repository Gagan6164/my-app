import React, { Component } from "react";

class Counter extends Component {
  state2 = {
    tags: [
      "learn react",
      "complete week 4 on coursera",
      "start ML",
      "learn python"
    ]
  };
  state = {
    count: this.state2.tags.length
  };
  styles = {
    fontSize: 18,
    fontWeight: "bold"
  };

  appendToDo() {}

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
        <div className="form-group">
          <form className="input-lm m-2">
            Add a task todo:
            <br />
            <input type="text" name="task" ref="id" />
            <button
              onClick={this.appendToDo()}
              className="btn btn-secondary btn-sm m-2"
            >
              Add
            </button>
            <button className="btn btn-secondary btn-sm">Delete</button>
          </form>
        </div>
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
    return count === 0 ? "Nothings to do" : count + " things To Do";
  }
}

export default Counter;

