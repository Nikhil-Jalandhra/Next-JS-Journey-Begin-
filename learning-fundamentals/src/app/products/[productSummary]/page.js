import React from 'react';

function productSummary({params}) {
  return (
    <div className='h-[75vh]'>
      Summary of {params.productSummary}
    </div>
  );
}

export default productSummary;
