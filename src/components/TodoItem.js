import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  naiveSlugify(value) {
    return value.replace(" ", "-");
  }

  render() {
    const {
      createdOn,
      description,
      title,
      status
    } = this.props;

    let descriptionDisplay = null;
    if (description) {
      descriptionDisplay = <div className="description">{description}</div>;
    }

    return (
      <div className="todo-item">
        <div className="text">
          <div className="title">{title}</div>
          {descriptionDisplay}
        </div>
        <div className="date">{createdOn.toLocaleDateString()}</div>
        <div className="status" className={`status ${this.naiveSlugify(status)}`}>
          <span>{status}</span>
        </div>
      </div>
    );
  }
}

TodoItem.defaultProps = {
  status: "not started",
};

TodoItem.propTypes = {
  createdOn: PropTypes.instanceOf(Date).isRequired,
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
  status: PropTypes.oneOf(["not started", "started", "complete"]),
}

export default TodoItem;
