import Link from 'next/link';

function gallery() {
  return (
    <div className='h-[75vh] flex p-[50px]'>
        <Link href="/gallery/9617542">
            <div className='w-[300px] h-[150px] overflow-hidden mx-[10px]'>
                <img className='w-[100%] h-[100%] object-cover' src="https://images.pexels.com/photos/9617542/pexels-photo-9617542.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
        </Link>
        <Link href="/gallery/2379004">
            <div className='w-[300px] h-[150px] overflow-hidden mx-[10px]'>
                <img className='w-[100%] h-[100%] object-cover' src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
        </Link>
        <Link href="/gallery/376464">
            <div className='w-[300px] h-[150px] overflow-hidden mx-[10px]'>
                <img className='w-[100%] h-[100%] object-cover' src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
        </Link>
    </div>
  );
}

export default gallery;
