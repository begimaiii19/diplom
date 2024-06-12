// Button.js

import React from 'react';
import './Button.css'; // Импортируем файл стилей

function Button({ onClick, children }) {
  return (
    <button className="button" onClick={onClick}>
      <span>{children}</span>
    </button>
  );
}

export default Button;
