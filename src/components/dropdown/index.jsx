import React, { useEffect, useState } from 'react';
import './dropdown.css'

const Dropdown = ({ props, data, selectedData }) => {
  console.log(data, 'asvasdvadvaw')
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (e) => {
    
    selectedData(e.target.value)
    setSelectedOption(e.target.value);
    props?.handleTypeChange(e.target.value)
    // data.map((data) => {
    //   if (data.name === e.target.value) {
    //   }
    // })
  };
  useEffect(() => {
    console.log(data, "iuadhauh")
  })
  return (
    <div>
      <div className='drop'>
        {/* <p className='drop_title'>{props.title}</p> */}
        <select className='dropselect ' id="dropdown" value={selectedOption} onChange={handleSelectChange}>

          {data?.map((connection) => {
            return (
              <option>{connection}</option>
            )
          })}
          {/* <option value="PostgresSQL">PostgresSQL</option>
        <option value="NoSql">NoSql</option>
        <option value="Mongodb">Mongodb </option> */}
        </select>
      </div>
      {selectedOption && <p>You selected: {selectedOption}</p>}
    </div>
  );
};
export default Dropdown;

