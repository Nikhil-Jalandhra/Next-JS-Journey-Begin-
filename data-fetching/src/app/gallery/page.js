export default async function gallery () {
    await new Promise((resolve) => setTimeout(resolve,2000))
    const photoData = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await photoData.json();
    return (
        <div className="w-[100%] grid grid-cols-3 pt-4 px-4">
                {data.map((item) => {
                        return (
                            <div className=" bg-gray-800 m-[5px] rounded-md p-2" key={item?.id}>
                                <p>Name: {item?.name}</p>
                                <p>Pet Name: {item?.username}</p>
                                <p>Email: {item?.email}</p>
                                <p>Address: {item?.address?.street}, {item?.address?.suite}, {item?.address?.city}, {item?.address?.zipcode}</p>
                                <p>Phone: {item?.phone}</p>
                                <p>Company: {item?.company.name}</p>
                                <p>Catch Prase: {item?.company.catchPhrase}</p>
                            </div>
                        )
                })}
        </div>
    )
}