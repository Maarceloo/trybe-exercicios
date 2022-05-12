import React from "react";
import PropTypes from "prop-types";

class Cidade extends React.Component {
  render() {
    const { funcao, value } = this.props;
    let error = undefined;
    if (value.length > 28) alert("LIMITE DE 28 CARACTERES");

    const verificaNumero = () => {
        let item = parseInt(value[0]);
        console.log(typeof item);
        if (typeof item === 'number') alert(`funcionou`)
    }

    return (
      <label>
        <input
          type="text"
          name="cidade"
          placeholder="Cidade"
          value={value}
          onChange={funcao}
          onBlur={verificaNumero}
        />
        {error}
      </label>
    );
  }
}

Cidade.propTypes = {
    value: PropTypes.string.isRequired
}

export default Cidade;
