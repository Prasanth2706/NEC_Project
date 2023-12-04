import React, { useState } from 'react';
import './dropdown.css'

const Dropdown = (props) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
    props.handleTypeChange(e.target.value)


  };

  return (
    <div>
      <div className='drop'>
        {/* <p className='drop_title'>{props.title}</p> */}
        <select className='dropselect' id="dropdown" value={selectedOption} onChange={handleSelectChange}>
        <option value="MySQL">MySQL</option>
        <option value="PostgresSQL">PostgresSQL</option>
        <option value="NoSql">NoSql</option>
        <option value="Mongodb">Mongodb </option>
      </select>
        </div>


      {selectedOption && <p>You selected: {selectedOption}</p>}
    </div>
  );
};
export default Dropdown;

