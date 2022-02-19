// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import PrivateRoute from './PrivateRoutes/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes >
        <Route path = "/" element = {<Home />}></Route>
        <Route path = "/login" element = {<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
