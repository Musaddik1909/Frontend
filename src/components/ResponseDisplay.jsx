import React, { useState } from 'react';
import Select from 'react-select';

const ResponseDisplay = ({ response }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = [
    { value: 'alphabets', label: 'Alphabets' },
    { value: 'numbers', label: 'Numbers' },
    { value: 'highest_lowercase_alphabet', label: 'Highest Lowercase Alphabet' },
  ];

  const filteredResponse = () => {
    let result = {};
    selectedOptions.forEach(option => {
      result[option.value] = response[option.value];
    });
    return result;
  };

  return (
    <div>
      <Select
        isMulti
        options={options}
        onChange={setSelectedOptions}
        placeholder='Select options to display'
      />
      <div>
        <h3>Response Data:</h3>
        <pre>{JSON.stringify(filteredResponse(), null, 2)}</pre>
      </div>
    </div>
  );
};

export default ResponseDisplay;
