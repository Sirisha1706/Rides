import React, { useState,useEffect } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'; 
import Home from './Components/Home/Home';
import MainHeader from './Components/MainHeader/MainHeader';
import NearestRide from './Components/Rides/NearestRide';
import PastRide from './Components/Rides/PastRide';
import FutureRide from './Components/Rides/FutureRide';
import './App.css';

const App=()=> {
  const [userData, setUserData]=useState('');
  const user=()=>{
    return fetch("https://assessment.api.vweb.app/user")
          .then((response) => response.json())
          .then((data)=>setUserData(data));
      }; 
  useEffect(() => {
      user();
    }, []);
  return (
    <React.Fragment>
    <BrowserRouter>
      <MainHeader name={userData}/>
      <Routes>
        <Route exact path='/nearestRide' element={<NearestRide/>}/>
        <Route exact path='/pastRide' element={<PastRide/>}/>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/futureRide' element={<FutureRide/>}/>
      </Routes>
      </BrowserRouter>
      </React.Fragment>
  );
}

export default App;
