import logo from './logo.svg';
import './App.css';
import Signup from './component/Signup';
import Login from './component/Login';
import Dashboard from './component/Dashboard';
import Ctasks from './component/Ctasks';
import Tasks from './component/Tasks';
import Leaves from './component/Leaves';
import Error from './component/Error'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Top from './component/Top';

function App() {
  return (
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login></Login>}></Route>
          <Route path='/sinup' element={<Signup></Signup>}></Route>
          <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
          <Route path='/tasks' element={<Tasks></Tasks>}></Route>
          <Route path='/ctasks' element={<Ctasks></Ctasks>}></Route>
          <Route path='/leaves' element={<Leaves></Leaves>}></Route>
          <Route path='/top' element={<Top></Top>}></Route>
          <Route path='*' element={<Error></Error>}></Route>
        </Routes>
     </BrowserRouter>
  );
}

export default App;
