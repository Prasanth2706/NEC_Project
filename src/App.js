import './App.css';
import Home from './pages/home';
import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/signup';
import Connection from './pages/connectionTable';
import ConnectionDetail from './pages/connectionDetail';
import ConnnectionProps from './pages/newConnection';
import Jobs from './pages/Jobstable';
import ToolSelection from './pages/toolselection';
import ToolDetail from './pages/toolDetail';
import MigrationInitiated from './pages/migrationStatus/MigrationInitiated';
import PopupCard from './components/popup/popupcard';


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        ></Route>
        <Route
          path='/connectionProps'
          element={<ConnnectionProps />}PopupCard
        ></Route>
        <Route
          path='/migration'
          element={<MigrationInitiated/>}
        ></Route>
        <Route
          path='/toolselection'
          element={<ToolSelection />}
        ></Route>
          <Route
          path='/popup'
          element={<PopupCard />}
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
