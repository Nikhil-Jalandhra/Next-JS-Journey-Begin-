import Link from "next/link";

function page() {
  return (
    <div>
      <div className="w-[100%] h-[75vh] flex p-[30px]">
        <Link href="/gallery/1362484">
          <div className="w-[300px] h-[400px] overflow-hidden">
            <img className="w-[100%] h-[100%] object-cover px-4" src="https://images.pexels.com/photos/1362484/pexels-photo-1362484.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image" />
          </div>
        </Link>
        <Link href="/gallery/323244">
          <div className="w-[300px] h-[400px] overflow-hidden">
            <img className="w-[100%] h-[100%] object-cover px-4" src="https://images.pexels.com/photos/323244/pexels-photo-323244.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image" />
          </div>
        </Link>
        <Link href="/gallery/971267">
          <div className="w-[300px] h-[400px] overflow-hidden">
            <img className="w-[100%] h-[100%] object-cover px-4" src="https://images.pexels.com/photos/971267/pexels-photo-971267.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image" />
          </div>
        </Link>
        <Link href="/gallery/4672468">
          <div className="w-[300px] h-[400px] overflow-hidden">
            <img className="w-[100%] h-[100%] object-cover px-4" src="https://images.pexels.com/photos/4672468/pexels-photo-4672468.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default page;
