import React from 'react';
import style from './index.module.css';

export default props => {
  return (
    <button className={style.year} onClick={props.changeExpireYear} value={props.year}>
      {props.year}
    </button>
  );
};
