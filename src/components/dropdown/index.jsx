import React, { useState } from 'react';
import './dropdown.css'

const Dropdown = (props) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <div className='drop'>
        <p className='drop_title'>{props.title}</p>
        <select className='dropselect' id="dropdown" value={selectedOption} onChange={handleSelectChange}>
          <option value="sabavsf">MySQL</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>


      {selectedOption && <p>You selected: {selectedOption}</p>}
    </div>
  );
};
export default Dropdown;
