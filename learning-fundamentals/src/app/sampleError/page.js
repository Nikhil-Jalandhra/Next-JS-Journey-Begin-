"use client"
function page() {

  const randomNumber = Math.floor(Math.random() * 2)

  console.log(randomNumber);

  if (randomNumber === 0) {
    throw Error("Retry to fetch data")
  }else {
    return (
      <div className="h-[75vh] flex justify-center items-center  flex-col">
        <h1 className="text-[30px] mb-3">Reload to see sample Error</h1>
        <p>Data</p>
        <p>Name: Nikhil</p>
        <p>Frontend Developer</p>
        <p>Thanks for visiting profile</p>
      </div>
    );
  }
}

export default page;

