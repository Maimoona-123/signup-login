import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route } from "react-router"
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path='/' Component={MainPage}></Route> */}
      <Route path='/login' Component={LoginPage}></Route>
      <Route path='/signup' Component={SignupPage}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
