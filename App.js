import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import { Link } from "react-router-dom";
import Nav from './Nav';
import About from './About';
import Contact from './Contact';
import CreateAcc from './CreateAcc';
import Withdraw from './Withdraw';
import Deposit from './Deposit';
import Fund from './Fund';
import Balance from './balance';
import ChangePin from './Pinchange';
import Summary from './Summary';

function App() {
  return (
    <div>


      <div className="row">
        <div className="col-md-2">
          <img src="i.jpeg" height="100%" width="100%"></img>
        </div>
        <div className="col-md-10">
          <h1>Welcome to ABC Bank</h1>
          <hr></hr>
          <h3>Bank at your door steps</h3>

        </div>
      </div>
      <BrowserRouter> 
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
   
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/create' element={<CreateAcc />} />
          <Route path='/withdraw' element={<Withdraw />} />
          <Route path='/deposit' element={<Deposit />} />
          <Route path='/fund' element={<Fund />} />
          <Route path='/bal' element={<Balance />} />
          <Route path='/change' element={<ChangePin />} />
          <Route path='/summary' element={<Summary />} />
          








    {/* <Route path='*' element={<NotFound />} /> */}
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
