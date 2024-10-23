import React from 'react';

function layout( {children, modal} ) {
  return (
    <div>
      {children}
      {modal}
    </div>
  );
}

export default layout;
