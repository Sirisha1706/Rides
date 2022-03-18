import { useEffect, useState } from 'react';

import NearestRide from '../Rides/NearestRide';
import PastRide from '../Rides/PastRide';
import FutureRide from '../Rides/FutureRide';
import { Button } from '../UI/Button';
import classes from './Home.module.css';

const Home=()=>{
    const [userdetls,setUserDetles] = useState('');
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
            <Button onClick={() => setcompnt('nearRide')} text="Nearest Ride"></Button>
            <Button onClick={() => setcompnt('pastRide')} text='Past Ride'></Button>
            <Button onClick={() => setcompnt('futureRide')} text='Upcoming Ride'></Button>
        </nav>
        <div>
            {compnt ==='nearRide' && <NearestRide rides={userdetls}/>}
            {compnt ==='pastRide' && <PastRide rides={userdetls}/>}
            {compnt ==='futureRide' && <FutureRide rides={userdetls}/>}
        </div>
    </div>
   );
}

export default Home;