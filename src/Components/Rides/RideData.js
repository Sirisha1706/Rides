import {useState} from 'react';
import './RideData.css';
const RideData =props =>{
    const [val, setval]=useState(false);
    let data=[];
    data = props.data;
    let state = props.state;
    let date2=new Date(data.date);
    let date1=new Date();
    if (state==='pastRide' && (date1>date2)){
       if(date1>date2){
           setval(true);
       }
       console.log('pastride', val);
    }
    else if (state === 'futureRide' && (date1<date2)){

    }
    return (
        <div className='ride'>
             <div className='image'>
            <img src={data.map_url} alt='route'/>
            </div>
            <div className="info" key={`diffdate ${ state ? 'pastRide':' '}`}>
                <div>Ride Id:{data.id}</div>
                <div>Origin Station:{data.origin_station_code}</div>
                <div>Station_path:{data.station_path}</div>
                <div>date:{data.date}</div>
                {/* <div>Ride Id:{data.id}</div> */}
            </div>
        </div>
    );
}

export default RideData;