import Link from "next/link";

function products() {

    const productList = [
        {
            name: "First Product",
            link: "products/first-product"
        },
        {
            name: "Second Product",
            link: "products/second-product"
        },
        {
            name: "Third Product",
            link: "products/third-product"
        },
        {
            name: "Fourth Product",
            link: "products/fourth-product"
        },
        {
            name: "Fifth Product",
            link: "products/fifth-product"
        }
    ];
    
    
  return (
    <div className="h-[75vh]">
      <h1 className="mb-4 text-[50px]">Produtcts</h1>
      {productList.map((item) => (
        <Link key={item.name} href={item.link}>
            <p className="mx-3 my-2">{item.name}</p>
        </Link>
      ))}
    </div>
  );
}

export default products;
