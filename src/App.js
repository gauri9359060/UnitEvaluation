import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Employees from './Components/Employees';
import NotFound from './Components/NotFound';
import Employee from './Components/Employee';
import Register from './Components/Register';
import { NewEmployee } from './Components/NewEmployee';


function App() {
  return (
    <div className="App">
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/employees' element={<Employees/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path='/employees/:id' element={<Employee/>}/>
        <Route path='/NewEmployee' element={<NewEmployee/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}


export default App;
