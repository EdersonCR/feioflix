import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Tag = styled.input`
  
`;

function FormField({
  tag, label, type, name, value, onChange,
}) {
  const fieldId = `id_${name}`;

  return (
    <div>
      <label htmlFor={fieldId}>
        {label}
        <Tag
          as={tag}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

FormField.defaultProps = {
  tag: 'input',
  type: 'text',
  value: '',
  onChange: () => {},
};

FormField.propTypes = {
  tag: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default FormField;
