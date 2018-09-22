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
      <ul className="list-group">
        {this.state2.tags.map(tag => (
          <li key={tag} className="list-group-item">
            {tag}
          </li>
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

        <form className="form-inline">
          <div className="form-group mx-sm-3 mb-2">
            <h3>Add a task todo:  </h3>
            <input type="text" name="task" ref="id" className="form-control" />
            <button
              onClick={this.appendToDo()}
              className="btn btn-secondary btn-sm m-2"
              type="submit"
            >
              Add
            </button>
            <button className="btn btn-secondary btn-sm">Delete</button>
          </div>
        </form>

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
