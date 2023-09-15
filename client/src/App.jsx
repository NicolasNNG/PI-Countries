import './App.css'
import {Routes,Route} from 'react-router-dom'
import Landing from './Components/Landing/Landing'
import Home from './Components/Home/Home'
import CardDetail from './Components/DetailCard/CardDetail'

import { useLocation } from 'react-router-dom';
import Nav from './Components/Nav/Nav'


  function App() {
    const location=useLocation().pathname;
    return (
      <div>
        {location !== "/" && <Nav></Nav>}
        <Routes>
          <Route exact path="/" element={<Landing/>}></Route>
          <Route path='/home'element={<Home/>}></Route>
          <Route path='/country/:id'element={<CardDetail/>}></Route>
        </Routes>
         

      </div>
    );
  }

export default App
