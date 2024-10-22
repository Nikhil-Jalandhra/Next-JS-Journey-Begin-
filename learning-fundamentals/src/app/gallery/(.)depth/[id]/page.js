import React from 'react';

function page( {params} ) {
  return (
    <div>
      Interceptor {[params.id]}
    </div>
  );
}

export default page;
