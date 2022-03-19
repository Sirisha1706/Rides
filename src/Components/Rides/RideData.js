import {useState} from 'react';
import './RideData.css';
const RideData =props =>{
    const [val, setval]=useState(false);
    let data=[];
    data = props.data;
    let state = props.state;
    let date2=new Date(data.date);
    let date1=new Date();
    return (
        <div className='ride'>
             <div className='image'>
            <img src={data.map_url} alt='route'/>
            </div>
            <div className="info" key={data.id}>
                <div className='button'><button className='btn1'>City</button>
                <button className='btn2'>State</button></div>
                <div>Ride Id:{data.id}</div>
                <div>Origin Station:{data.origin_station_code}</div>
                <div>Station_path:{data.station_path}</div>
                <div>date:{data.date}</div>
            </div>
        </div>
    );
}

export default RideData;