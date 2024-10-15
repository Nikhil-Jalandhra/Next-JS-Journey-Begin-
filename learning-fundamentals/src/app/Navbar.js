import Link from 'next/link';
import React from 'react';

function Navbar() {

  const navLinks = [
    {
      name: "Home",
      link: "/"
    },
    {
      name: "About",
      link: "/about"
    },
    {
      name: "Products",
      link: "/products"
    },
    {
      name: "Features",
      link: "/features"
    },
  ]

  return (
    <div>
      <div className='w-[100%] h-[10vh] bg-slate-500 flex justify-center items-center'>
        {navLinks.map((item)=> (
          <Link key={item.name} href={item.link}>
          <p className="px-3">{item.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
