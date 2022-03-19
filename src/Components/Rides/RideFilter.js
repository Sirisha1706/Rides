import RideData from './RideData';
import './RideFilter.css';
const RideFilter = props =>{
    let values = []
    values=props.rides;
    return (
      <>
        <div className="filter">
          <h1>Filter</h1>
          <div className='city'>
            <select value={'City'}>
              {values.map(val=><option value={val.city}>{val.city}</option>)}
            </select>
            </div>
            <div className='state'>
            <select value={'State'} >
            {values.map(val=><option value={val.state}>{val.state}</option>)}
            </select>
          </div>
        </div>
        <div className='.info'>
        {values.map(det=><RideData data={det} state={props.state}/>)}
      </div>
      </>
      );
};

export default RideFilter;