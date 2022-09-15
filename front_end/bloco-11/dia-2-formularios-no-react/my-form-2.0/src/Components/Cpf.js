import React from "react";
import PropTypes from "prop-types";

class Cpf extends React.Component {
  render() {
    const { value, funcao } = this.props;
    let error = undefined;
    if (value.length > 11) error = alert("PERMITIDO ATE 11 CARACTERES");
    return (
      <label>
        <input
          type="text"
          name="cpf"
          placeholder="CPF"
          value={value}
          onChange={funcao}
        />
        {error}
      </label>
    );
  }
}

Cpf.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Cpf;
