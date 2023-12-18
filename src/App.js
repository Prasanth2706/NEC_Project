import './App.css';
import Home from './pages/home';
import { Routes, Route, useNavigate } from 'react-router-dom';
import SignUp from './pages/signup';
import Connection from './pages/connectionTable';
import ConnectionDetail from './pages/connectionDetail';
import Jobs from './pages/Jobstable';
import ToolSelection from './pages/toolselection';
import ToolDetail from './pages/toolDetail';
import MigrationInitiated from './pages/migrationStatus/MigrationInitiated';
import PopupCard from './components/popup/popupcard';
import AboutUs from './pages/AboutUs';
import PopUp from './components/popup/popup';



function App() {

   

  return (
    <div className='App'>

      {/* render */}
      {/* {localStorage.getItem('pop-up') && <PopUp/>} */}
      <Routes>
        <Route
          path='/'
          element={<Home />}
        ></Route>
        <Route
          path='/migration'
          element={<MigrationInitiated />}
        ></Route>
        <Route
          path='/toolselection'
          element={<ToolSelection />}
        ></Route>
        <Route
          path='/popup'
          element={<PopUp/>}
        ></Route>
        <Route
          path='/aboutus'
          element={<AboutUs />}
        ></Route>
        <Route
          path='/tooldetail'
          element={<ToolDetail />}
        ></Route>
        <Route
          path='/connectiondetail'
          element={<ConnectionDetail />}
        ></Route>
        <Route
          path='/connections'
          element={<Connection />}
        ></Route>
        <Route
          path='/jobs'
          element={<Jobs />}
        ></Route>
        <Route
          path='/signup'
          element={<SignUp />}
        ></Route>
      </Routes>
    </div>
  );
}
export default App;



// change jobs data name and time in table(regex)
// test connection dropdown issue and access token 
// check the flow of register now
// comment the search button in table
