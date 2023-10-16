import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Register from './pages/LoginRegister/Register';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/register' element={<Register/>}/>
        
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
