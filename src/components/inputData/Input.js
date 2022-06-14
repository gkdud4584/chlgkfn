import React, { Component } from "react";
import InputForm from "./InputForm";

class Input extends Component {
  state = {
    users: []
  };

  handleCreate = (data) => {
    this.setState({
      users: this.state.users.concat(data)
    });
  };
  render() {
    return (
      <>
        <InputForm onCreate={this.handleCreate} />
        {/* Object를 Json으로 변환 */}
        {console.log(JSON.stringify(this.state.users))}
      </>
    );
  }
}

export default Input;


