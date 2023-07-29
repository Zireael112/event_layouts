import React from 'react';
import './IconSwitch.css';
import '../Store.css'


export default function IconSwitch({ icon, onSwitch }) {
  return (
    <div className={'icon__block'}>
      <span className={'material-icons'} onClick={onSwitch}>
        {icon}
      </span>
    </div>
  );
}