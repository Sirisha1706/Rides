const RideFilter = props =>{
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };
    //const values=props.data;
    return (
        <div>
          <h1>Filter</h1>
          <div>
            <label>City</label>
            <select value={'City'} onChange={dropdownChangeHandler}>
              {/* {values.map(val=><option key={val[0].id}>{val[0].city}</option>)} */}
              <option value='2021'>2021</option>
              <option value='2020'>2020</option>
              <option value='2019'>2019</option>
            </select>
            <label>State</label>
            <select value={props.selected} onChange={dropdownChangeHandler}>
              <option value='2022'>2022</option>
              <option value='2021'>2021</option>
              <option value='2020'>2020</option>
              <option value='2019'>2019</option>
            </select>
          </div>
        </div>
      );
};

export default RideFilter;