
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/Aboutus/About';
import Contact from './Components/Contactus/Contact';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Slider from './Components/Slider/Slider';

function App() {
  return (
    <div >
      <Header></Header>

   
      <Routes>

<Route path='/' element={<Home></Home>}> </Route>
        <Route path='/about' element={ <About></About>}> </Route>
<Route path='/contact' element={<Contact></Contact>}> </Route>

      </Routes>

    </div>
  );
}

export default App;
