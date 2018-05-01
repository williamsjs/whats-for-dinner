import React from 'react';
import './MenuButton.scss';

const MenuButton = ({menuOpen, handleClick}) => {
  return (
    <div className={menuOpen ? 'bar-container open' : 'bar-container'} onClick={handleClick}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  );
};

export default MenuButton;