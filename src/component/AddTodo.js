import React from 'react'
import {connect} from 'react-redux'

class AddTodo extends React.Component{
    constructor(props){
        super(props)

        this.state={
            Task:''
        }
    }
    handleClick=()=> {
        this.props.addTask(this.state.Task);
        this.setState({Task:''})
}
render() {
    return (
      <div style={{textAlign:"center",justifyContent:"center"}}>
        <input
          type="text"
          value={this.state.Task}
          onChange={(e) => {
            this.setState({ Task: e.target.value });
          }}
        />
        <button
          onClick={() => {
            this.handleClick();
          }}
        >
          Add 
        </button>
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
    addTask: (val) => dispatch({ type: "ADD_TODO", payload: val }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
