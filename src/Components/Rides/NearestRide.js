import Card from '../UI/Card';
import classes from './Nearest.module.css';
const NearestRide = (props) =>{
    let details=props.rides;
    console.log(details[0]);
    return(
        <Card className={classes.info}>
            <div>
            {
               <ul>
                    <li >Ride Id: {details[0].id}</li>
                    <li>Origin Station: {details[0].origin_station_code}</li> 
                    <li >Station_path:{details[0].station_path.map((d)=>[d,])}</li>
                  {/* <li >Date: {new Date(details[0].id)}</li> */}
              </ul>
            }
            </div>
        </Card>
    );
};

export default NearestRide;