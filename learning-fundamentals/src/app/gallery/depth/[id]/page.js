import React from 'react';

function page( {params} ) {

  return (
    <div>
      After Reload {params.id}
    </div>
  );
}

export default page;
