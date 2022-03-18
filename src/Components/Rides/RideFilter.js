const RideFilter = props =>{
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };
    let values = []
    values=props.rides;
    return (
        <div>
          <h1>Filter</h1>
          <div>
            <label>City</label>
            <select value={'City'} onChange={dropdownChangeHandler}>
              {values.map(val=><option value={val.city}>{val.city}</option>)}
            </select>
            </div>
            <div>
            <label>State</label>
            <select value={'State'} onChange={dropdownChangeHandler}>
            {values.map(val=><option value={val.state}>{val.state}</option>)}
            </select>
          </div>
        </div>
      );
};

export default RideFilter;