import React from "react";
import PropTypes from "prop-types";

class Cidade extends React.Component {
  render() {
    const { funcao, value } = this.props;
    let error = undefined;
    if (value.length > 28) alert("LIMITE DE 28 CARACTERES");

    const verificaNumero = () => {
      if (isNaN(value[0]) === false) {
        // LOGICA PARA RESERTAR INPUT
        alert("SO ACEITA LETRAS");
      }
    };

    return (
      <label>
        <input
          type="string"
          name="cidade"
          placeholder="Cidade"
          value={value}
          onBlur={verificaNumero}
          onChange={funcao}
        />
        {error}
      </label>
    );
  }
}

Cidade.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Cidade;
