import './RideData.css';
const RideData =props =>{
    const {data} = props;
    console.log(data);
    return (
        <div className='ride'>
            <div className='image'>
            <img src={data.map_url} alt='route'/>
            </div>
            <div className="info">
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