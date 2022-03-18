import React from 'react';
import classes from './NavBar.module.css';

const Navigation = (props) => {
  return (
    <nav  className={classes.nav}>
      <form >
      <ul>
          <li>
            <label>{props.details.name}</label>
            </li>
            <li>
            <div className={classes.container}>
            <img src={props.details.url} alt="user" className={classes.image} ></img>
            </div>
          </li>           
       </ul>
      </form>
    </nav>
  );
};

export default Navigation;
