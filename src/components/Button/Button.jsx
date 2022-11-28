import React from 'react';
import { Link } from 'react-router-dom';
import css from './Button.module.css';

const Button = ({ children, to, disabled, onclick, buttonType, isUnderDev = false}) => {
  return (
      <div className={css.Btn_native}>
        {
          isUnderDev === false ? (
              disabled ? (
                  <Link onClick={onclick} className={css.disabled} to='/'>
                    {children}
                  </Link>
              ) : (
                  <Link onClick={onclick} className={css[buttonType] || css.button} to={to}>
                    {children}
                  </Link>
              )
          ) : (
              disabled ? (
                  <span onClick={onclick} className={css.disabled} >
                  {children}
                </span>
              ) : (
                  <span onClick={() => {alert('Данный раздел находится в разработке')}} className={css[buttonType] || css.button} >
                  {children}
                </span>
              )
          )
        }
      </div>
  );
};

export default Button;
