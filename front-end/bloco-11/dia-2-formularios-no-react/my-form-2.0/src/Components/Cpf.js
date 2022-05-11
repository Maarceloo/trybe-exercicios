import React from "react";

class Cpf extends React.Component {
  render() {
    const { value, funcao } = this.props;
    return (
      <input
        type="text"
        name="cpf"
        placeholder="CPF"
        value={value}
        onChange={funcao}
      />
    );
  }
}

export default Cpf;
