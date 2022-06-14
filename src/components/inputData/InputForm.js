import React, { Component } from "react";

class InputForm extends Component {
  state = {
    name: "",
    identifier: "",
    currency: "",
    reciever: "",
    recieve: "",
    reCurrency: "",
    Imformation:""    
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      //input값 빈값으로 초기화
      name: "",
      identifier: "",
      currency: "",
      reciever: "",
      recieve: "",
      reCurrency: "",
      Imformation: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          onChange={this.handleChange}
          value={this.state.name}
          placeholder="송금측 이름"
        />
        <input
          name="identifier"
          onChange={this.handleChange}
          value={this.state.identifier}
          placeholder="송금측 이메일 혹은 계좌번호"
        />
        <input
          name="currency"
          onChange={this.handleChange}
          value={this.state.currency}
          placeholder="송금측 화폐 종류"
        /><br/>        
        <input
          name="reciever"
          onChange={this.handleChange}
          value={this.state.reciever}
          placeholder="수금측 이름"
        />
        <input
          name="recieve"
          onChange={this.handleChange}
          value={this.state.recieve}
          placeholder="수금측 이메일 혹은 계좌번호"
        />
        <input
          name="reCurrency"
          onChange={this.handleChange}
          value={this.state.reCurrency}
          placeholder="수금측 화폐 종류"
        /><br/>
        <input
          name="Imformation"
          onChange={this.handleChange}
          value={this.state.Imformation}
          placeholder="정보7"
        />                
        <button type="submit">작성</button>
      </form>
    );
  }
}

export default InputForm;