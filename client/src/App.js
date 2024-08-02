import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import  Cust from "./pages/Cust.js";
import  Owner from "./pages/Owner.js";
import  Home from "./pages/Home.js";
import Header from './pages/Header.js';
import Add from './pages/Add.jsx';
import Ownerview from './pages/Ownerview.js';
import Custview from './pages/Custview.js';

function App() {
  return (
   <>
  <Header />
   <BrowserRouter>
   <Routes>
    <Route path='/' element={ <Home />}/>
    <Route path="/Owner" element={<Owner />}/>
    <Route path="/Ownerview" element={<Ownerview />}/>
    <Route path="/Cust" element={<Cust />}/>
    <Route path=":id" element={<Custview />}/>
    <Route path="/Add" element={<Add />}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
