//import Card from '../UI/Card';
import classes from './Nearest.module.css';
import RideData from './RideData';
const NearestRide = (props) =>{
    let details=[];
    details=props.rides;

    return(
        <div className={classes.info}>
        {details.map(det=><RideData data={det} state={props.state} key={Math.random()}/>)}
        </div>
    );
};

export default NearestRide;