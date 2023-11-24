// import React from 'react';
// import { useState } from 'react';
// const LoginForm = () => {
//     const [email, setEmail] = useState('e.g. John Joe');
//     const [password, setPassword] = useState('Enter Password');

//     const handleEmailChange = (e) => {
//         setEmail(e.target.value);
//     };

//     const handlePasswordChange = (e) => {
//         setPassword(e.target.value);
//     };

//     const handleFormSubmit = (e) => {
//         e.preventDefault();
//         console.log('Email:', email);
//         console.log('Password:', password);
//         setEmail('');
//         setPassword('');
//     };
//     return (
//         <div className='App'>
//             <div className='left-part'>
//                 <div className='main-image'>
//                     <img
//                         src=''
//                         alt=''
//                     />
//                 </div>
//                 <div className='left-title'>
//                     <p>LOREM IPSUM</p>
//                 </div>
//             </div>
//             <div className='right-part'>
//                 <div className='main-content'>
//                     <div className='main-heading'>
//                         <p>Welcome to Lorem Ipsum!</p>
//                     </div>
//                     <form onSubmit={handleFormSubmit}>
//                         <div>
//                             <label>Email/ User Name</label>
//                             <input
//                                 type='email'
//                                 value={email}
//                                 onChange={handleEmailChange}
//                                 required
//                             />
//                         </div>
//                         <div>
//                             <label>Password</label>
//                             <input
//                                 type='password'
//                                 value={password}
//                                 onChange={handlePasswordChange}
//                                 required
//                             />
//                         </div>
//                         <button type='submit'>Login</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LoginForm;
