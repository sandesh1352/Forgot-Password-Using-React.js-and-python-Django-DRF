import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      pass: "",
    };
  }
  render() {
    return (
      <form
        style={{
          textAlign: "center",
          justifyContent: "center",
          margin: "8%",
          marginLeft: "25%",
          marginRight: "25%",
          border: "2px solid black",
          backgroundColor: "#6CB886",
        }}
      >
        <h1>Login</h1>
        <div style={{ textAlign: "center", justifyContent: "center" }}>
          <input
            type="text"
            value={this.state.name}
            placeholder="UserName"
            onChange={(e) => {
              this.setState({ name: e.target.value });
            }}
          />
        </div>

        <div style={{ textAlign: "center", justifyContent: "center" }}>
          <input
            type="password"
            value={this.state.pass}
            placeholder="password"
            onChange={(e) => {
              this.setState({ pass: e.target.value });
            }}
          />
        </div>
        <Link to={`/todoApp/${this.state.name}`}>
          <button>Submit</button>
        </Link>
      </form>
    );
  }
}
export default Login;
