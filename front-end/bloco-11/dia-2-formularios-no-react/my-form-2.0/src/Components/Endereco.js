import React from "react";

class Endereco extends React.Component {
  render() {
    const { value, funcao } = this.props;
    return (
      <input
        type="text"
        name="endereco"
        placeholder="Endereço"
        value={value}
        onChange={funcao}
      />
    );
  }
}

export default Endereco;
