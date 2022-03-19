import { useEffect, useState } from 'react';

import NearestRide from '../Rides/NearestRide';
import PastRide from '../Rides/PastRide';
import FutureRide from '../Rides/FutureRide';
import RideFilter from '../Rides/RideFilter';
import { Button } from '../UI/Button';
import classes from './Home.module.css';

const Home=()=>{
    const [userdetls,setUserDetles] = useState([]);
    const [compnt,setcompnt] = useState('nearRide');
    const fetchdata = () => {
        return fetch("https://assessment.api.vweb.app/rides")
              .then((response) => response.json())
              .then((data)=>setUserDetles(data));
            };  
    useEffect(() => {
        fetchdata();
    }, []);
   return(
    <div className={classes.home}>
        <nav className={classes.nav}>
            <button onClick={() => setcompnt('nearRide')} >Nearest Ride</button>
            <button onClick={() => setcompnt('pastRide')} >Past Ride</button>
            <button onClick={() => setcompnt('futureRide')} >Upcoming Ride</button>
            <button onClick={() =>setcompnt('filter')} className={classes.btn}>Filter</button>
        </nav>
        <div>
            {compnt ==='nearRide' && <NearestRide rides={userdetls} state={compnt}/>}
            {compnt ==='pastRide' && <PastRide rides={userdetls} state={compnt}/>}
            {compnt ==='futureRide' && <FutureRide rides={userdetls} state={compnt}/>}
            {compnt === 'filter' && <RideFilter rides={userdetls} state={compnt}/>}
        </div>
    </div>
   );
}

export default Home;