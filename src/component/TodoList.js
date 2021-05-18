import React from "react";
import { connect } from "react-redux";

class TodoList extends React.Component {
  render() {
    return (
      <div style={{textAlign:"center",justifyContent:"center"}}>
        <input
          type="checkbox"
          checked={this.props.propsIsChecked}
          onClick={() => {
            this.props.taskCompleted(this.props.propsInd);
          }}
        />

        {this.props.propsIsChecked ? (
          <strike>
            <div>{this.props.propsTask}</div>
          </strike>
        ) : (
          <div>{this.props.propsTask}</div>
        )}
        <div>
          <button
            onClick={() => {
              this.props.deleteTask(this.props.propsInd);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    Data: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    taskCompleted: (val) => dispatch({ type: "TASK_COMPLETED", payload: val }),
    deleteTask: (val) => dispatch({ type: "DELETE_TASK", payload: val }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
