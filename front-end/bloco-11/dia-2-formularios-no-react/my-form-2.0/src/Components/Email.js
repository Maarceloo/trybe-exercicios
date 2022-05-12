import React from "react";
import PropTypes from "prop-types";

class Email extends React.Component {
  render() {
    const { funcao, value } = this.props;
    let error = undefined;
    if (value.length > 50) error = alert("PERMITIDO ATE 50 CARACTERES");

    return (
      <label>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={value}
          onChange={funcao}
        />
        {error}
      </label>
    );
  }
}

Email.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Email;
