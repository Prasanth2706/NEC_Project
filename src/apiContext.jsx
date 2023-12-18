// // ApiContext.js
// import { createContext, useContext, useState } from 'react';
// import ToolDetail from './pages/toolDetail';

// const ApiContext = createContext();

// export const ApiProvider = () => {
//   const [apiPopupResult, setApiPopupResult] = useState(null);

//   const setApiData = (data) => {
//     setApiPopupResult(data);
//   };

//   return (
//     <ApiContext.Provider value={{ apiPopupResult, setApiData }}>
//       {<ToolDetail/>}
//     </ApiContext.Provider>
//   );
// };

// export const useApi = () => {
//   return useContext(ApiContext);
// };
