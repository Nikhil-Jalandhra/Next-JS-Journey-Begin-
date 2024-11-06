export default async function products () {
    const fetchProducts = await fetch("http://localhost:3001/products",{cache: "no-cache"});
    const data = await fetchProducts.json();
    return (
        <div className="w-[100%] pt-4 px-4">
            {data.map((item)=> (
                <div className="bg-gray-800 m-[5px] rounded-md p-2">
                    <p>{item.title}</p>
                    <p>{item.price}</p>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    )
}