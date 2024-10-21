import React from 'react';

function imagePreviewInta({params}) {
    
  return (
    <div>
      <h1>intapta</h1>
        <div className="w-[500px] h-[700px] overflow-hidden">
            <img className='w-[100%] h-[100%] object-cover' src={`https://images.pexels.com/photos/${params.id}/pexels-photo-${params.id}.jpeg?auto=compress&cs=tinysrgb&w=600`} alt="" />
        </div>
    </div>
  );
}

export default imagePreviewInta;
