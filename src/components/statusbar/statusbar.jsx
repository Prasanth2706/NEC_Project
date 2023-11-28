// import React from 'react'
// import './statusbar.css'


// const StatusBar = () => {
//   return (
//     <>
//      <div className='line'> 

//      </div>

//      <div className='status'>

//         <div className='status-shape'>
//         <div class="status-num">1</div>
//         </div>
       
//         <div className='status-shape'>
//         <div class="status-num">2</div>
//         </div>
        
//         <div className='status-shape'>
//         <div class="status-num">3</div>
//         </div>
        
//      </div>
//     </>
//   )
// }

// export default StatusBar


import React from 'react';
import './statusbar.css';

const StatusBar = () => {
  return (
    <div className='status-bar'>
      <div className='status-shape'>
        <div className='status-num' style={{ backgroundColor: 'green' }}>1</div>
      </div>

      <div className='line'></div>

      <div className='status-shape'>
        <div className='status-num'>2</div>
      </div>

      <div className='line'></div>

      <div className='status-shape'>
        <div className='status-num'>3</div>
      </div>
    </div>
  );
};

export default StatusBar;