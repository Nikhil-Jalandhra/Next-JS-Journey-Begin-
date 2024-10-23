"use client"
import React from 'react';


function page( {params} ) {

  console.log(params)
  console.log(params.id)

  return (
    <div>
      <div className='absolute w-[400px] h-[600px] overflow-hidden left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <img className="w-[100%] h-[100%] object-cover" src={`https://images.pexels.com/photos/${params.id}/pexels-photo-${params.id}.jpeg?auto=compress&cs=tinysrgb&w=600`} alt={`${params.id}`} />
      </div>
    </div>
  );
}

export default page;
