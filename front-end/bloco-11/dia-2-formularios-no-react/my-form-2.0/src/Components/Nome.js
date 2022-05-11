import React from "react";

class Nome extends React.Component {
  render() {
    const { funcao, value } = this.props;
    return (
      <input
        type="text"
        name="nome"
        placeholder="Nome"
        value={value}
        onChange={funcao}
      />
    );
  }
}

export default Nome;
