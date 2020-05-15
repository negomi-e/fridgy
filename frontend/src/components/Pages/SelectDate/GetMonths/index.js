import React from 'react';
import style from './index.module.css';

export default props => {
  return (
    <button className={style.month} onClick={props.changeExpireMonth} value={props.month}>
      {props.month}
    </button>
  );
};
