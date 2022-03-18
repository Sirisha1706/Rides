import React from 'react';

import NavBar from './NavBar';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>EDVORA</h1>
      <NavBar details={props.name}/>
    </header>
  );
};

export default MainHeader;
