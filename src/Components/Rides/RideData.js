import {useState} from 'react';
import './RideData.css';
const RideData =props =>{
    let data=[];
    data = props.data;
    let state = props.state;
    let date2=new Date(data.date);
    let date1=new Date();
    let route=[];
    route = data.station_path.map(val=>Math.abs(val-data.destination_station_code));
    let minium=Math.min(parseInt(route.reverse()))
    const clickHundler=event=>{
        event.preventDefault();

    }
    return (
        <div className='ride'>
             <div className='image'>
            <img src={data.map_url} alt='route' key={Math.random()}/>
            </div>
            <div className='button' key={Math.random()}><button className='btn1' onClick={clickHundler}>City</button>
                <button className='btn2' key={Math.random()} onClick={clickHundler}>State</button></div>
            <div className="info" key={Math.random()}>
                <div key={Math.random()}>Ride Id:{data.id}</div>
                <div key={Math.random()}>Origin Station:{data.origin_station_code}</div>
                <div key={Math.random()}>Station_path:{data.station_path}</div>
                <div key={Math.random()}>date:{data.date}</div>
                <div key={Math.random()}>Distance:{minium}</div>
            </div>
        </div>
    );
}

export default RideData;