import RideData from './RideData';
import './RideFilter.css';
const RideFilter = props =>{
    let values = []
    values=props.rides;
    return (
      <>
        <div className="filter">
          <h1 align='center'>Filter</h1>
          <div className='city'>
            <select value='City'>
            <option selected>City</option>
              {values.map(val=><option value={val.city}>{val.city}</option>)}
            </select>
            </div>
            <div className='state'>
            <select value={'State'} >
            <option selected>State</option>
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