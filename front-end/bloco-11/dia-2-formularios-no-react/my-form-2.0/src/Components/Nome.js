import React from "react";
import PropTypes from 'prop-types'

class Nome extends React.Component {
  render() {
    const { funcao, value } = this.props;
    let error = undefined;
    if (value.length > 40) error = alert("digite menos de 40 caracteres");
    return (
      <label>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={value.toUpperCase()}
          onChange={funcao}
        />
        {error}
      </label>
    );
  }
}

Nome.propTypes = {
  value: PropTypes.string.isRequired
}

export default Nome;
