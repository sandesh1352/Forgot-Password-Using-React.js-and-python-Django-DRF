import React from "react";
import { connect } from "react-redux";
import TodoList from "./TodoList";
class VisibilityFilter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: "all",
    };
  }
  render() {
    const TodoListComponents = this.props.Data.tuborg
      .filter((item, index) => {
        if (this.state.filter ==="all") {
          return true;
        } else if (this.state.filter ==="completed") {
          return item.isChecked;
        } else {
          return !item.isChecked;
        }
      })
      .map((item, index) => {
        return (
          <TodoList
            propsTask={item.Task}
            propsIsChecked={item.isChecked}
            propsInd={index}
          />
        );
      });
    return (
      <div style={{textAlign:"center",justifyContent:"center"}}>
        <div>
          <button
            value="all"
            onClick={(e) => {
              this.setState({ filter: e.target.value });
            }}
          >
            All
          </button>
          <button
            value="completed"
            onClick={(e) => {
              this.setState({ filter: e.target.value });
            }}
          >
            Completed
          </button>
          <button
            value="uncompleted"
            onClick={(e) => {
              this.setState({ filter: e.target.value });
            }}
          >
            Incompleted
          </button>
        </div>
        <div style={{ margin: "2%", marginLeft: "10%", marginTop: "2%" }}>
          {TodoListComponents}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
    return {
      Data: state,
    };
}
export default connect(mapStateToProps)(VisibilityFilter)
