import Link from "next/link";

function archived() {
  return (
    <div>
      wana go back 
      <Link href={"/complex-dashboard"}>
          <button className="text-blue-700 underline ml-2">Unarchived</button>
        </Link>
    </div>
  );
}

export default archived;
