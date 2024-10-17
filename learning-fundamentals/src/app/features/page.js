import Link from "next/link";

function features() {

  const featuresList = [
    {
        name: "First Features",
        link: "features/first-features"
    },
    {
        name: "Second Features",
        link: "features/second-features"
    },
    {
        name: "Third Features",
        link: "features/third-features"
    },
    {
        name: "Fourth Features",
        link: "features/fourth-features"
    },
    {
        name: "Fifth Features",
        link: "features/fifth-features"
    }
];

  return (
    <div className="h-[75vh]">
      <h1 className="mb-4 text-[50px]">Features</h1>
      {featuresList.map((item) => (
        <Link key={item.name} href={item.link}>
            <p className="mx-3 my-2">{item.name}</p>
        </Link>
      ))}
    </div>
  );
}

export default features;
