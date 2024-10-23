import React from 'react';

function page( {params} ) {

  return (
    <div>
      <div>
      <div className='w-[400px] h-[600px] overflow-hidden flex justify-center items-center'>
        <img className="w-[100%] h-[100%] object-cover" src={`https://images.pexels.com/photos/${params.id}/pexels-photo-${params.id}.jpeg?auto=compress&cs=tinysrgb&w=600`} alt={`${params.id}`} />
      </div>
    </div>
    </div>
  );
}

export default page;
