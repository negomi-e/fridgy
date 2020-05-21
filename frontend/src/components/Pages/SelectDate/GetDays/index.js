import React from 'react';
import style from './index.module.css';

export default props => {
  return (
    <button className={style.day} onClick={props.changeExpireDay} value={props.day}>
      {props.day}
    </button>
  );
};
