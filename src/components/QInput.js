import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Input, Label } from 'reactstrap';

QInput.defaultProps = {
  type: 'text',
  label: '',
  placeholder: '',
  disabled: false
};

QInput.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool
};

function QInput(props) {
  const { field, form, type, label, placeholder, disabled } = props;
  const { name, value, onChange, onBlur } = field;

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Input
        name={name}
        id={name}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        type={type}
      />
    </FormGroup>
  );
}

export default QInput;
