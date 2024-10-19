"use client"


export default function Errorboundary({error, reset}) {
    return ( <div className="h-[75vh] flex justify-center items-center flex-col">
                <h1 className="text-[25px]">{error.message}</h1>
                <button onClick={reset} className="bg-slate-700 px-[15px] py-1 rounded-[5px] mt-3 hover:bg-slate-400">Retry</button>
            </div>)
}