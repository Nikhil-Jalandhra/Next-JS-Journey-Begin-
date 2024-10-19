import Link from "next/link";

function users() {
  return (
    <div>
        Well this is my place 
        <Link href={"/complex-dashboard/archived"}>
          <button className="text-blue-700 underline ml-2">Archived</button>
        </Link>
    </div>
  );
}

export default users;
