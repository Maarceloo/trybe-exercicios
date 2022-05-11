import React from "react";

class Email extends React.Component {
  render() {
    const { funcao, value } = this.props;
    return (
      <input
        type="text"
        name="email"
        placeholder="Email"
        value={value}
        onChange={funcao}
      />
    );
  }
}

export default Email;
