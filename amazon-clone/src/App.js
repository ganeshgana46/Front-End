import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    //BEM
    <>
      <Router>
        <div className="App">
        <Header/>
          <Routes>
            <Route path='/Home' element={[<Home/>]}/>
            <Route path="/checkout" element={<Checkout/>}/>
          </Routes>
        </div>
      </Router>
    </>

  );
}

export default App;
