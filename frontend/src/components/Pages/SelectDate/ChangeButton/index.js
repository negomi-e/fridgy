import React from 'react';
import style from './index.module.css';

export default props => {
  return <button className={style.change} onClick={props.changeExpireDate}>change expire date</button>
}
