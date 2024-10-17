"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';

function NavigatePage() {
    
    const router = useRouter();
    const [displayTimeOut, setDisplayTimeOut] = useState();
    
    const navigatingHandle = () => {
        let sec = 3
        setDisplayTimeOut(sec);

        const  countDown = setInterval(() => {
            sec -= 1;
            setDisplayTimeOut(sec)
            if (sec === 0) {
                router.push("/")
                return clearInterval( countDown)
            }
        }, 1000);    
    }

  return (
    <div className='h-[75vh] flex justify-center items-center'>
        <button className='bg-emerald-900 hover:bg-emerald-700 px-4 py-3 rounded'
        onClick={navigatingHandle}>
            Navigate to Home {displayTimeOut}
        </button>
    </div>
  );
}

export default NavigatePage;
