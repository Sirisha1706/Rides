import {useState} from 'react';
import './RideData.css';
const RideData =props =>{
    const [val, setval] = useState('');
    let data=[];
    data = props.data;
    let route=[];
    route = data.station_path.map(val=>Math.abs(val-data.destination_station_code));
    let minium=Math.min(parseInt(route.reverse()))
    const clickHundler=(event )=>{
        event.preventDefault();
        let value = event.target.value;
         if(value==='city') setval(data.city);
         else setval(data.state);
    }
    return (
        <div className='ride' key={data.id}>
             <div className='image'>
            <img src={data.map_url} alt='route'/>
            </div>
            <div className="info">
                <div>Ride Id:{data.id}</div>
                <div>Origin Station:{data.origin_station_code}</div>
                <div>Station_path:{data.station_path}</div>
                <div>date:{data.date}</div>
                <div>Distance:{minium}</div>
            </div>
            <div className='button'>
                <button className='btn1' onClick={clickHundler} key='01' value='city' >City</button>
                <button className='btn2' onClick={clickHundler} key='02' value='state'>State</button>
                {val===data.state && <p style={{color:'white'}}>State : {data.state}</p>}
                {val===data.city && <p style={{color:'white'}}>City : {data.city}</p>}
                </div>
        </div>
    );
}

export default RideData;