import React from "react";
import PropTypes from "prop-types";

class Endereco extends React.Component {
  render() {
    const { value, funcao } = this.props;
    let error = undefined;
    if (value.length > 200) error = alert("PERMITIDO ATE 200 CARACTERES");
    return (
      <label>
        <input
          type="text"
          name="endereco"
          placeholder="Endereço"
          value={value}
          onChange={funcao}
        />
        {error}
      </label>
    );
  }
}

Endereco.propTypes = {
  value: PropTypes.string.isRequired
}

export default Endereco;
