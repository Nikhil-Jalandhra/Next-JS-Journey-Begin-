'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
    {
      name: "Login",
      link: "/login"
    },
    {
      name: "SignUp",
      link: "/signup"
    },
    {
      name: "Navigate",
      link: "/navigate"
    },
  ];

  const pathName = usePathname();

  return (
    <div>
      <div className='w-[100%] h-[10vh] bg-slate-500 flex justify-center items-center'>
        {navLinks.map((item)=> {
          let isActive = pathName.endsWith(item.link)
          return (
            (
              <Link key={item.name} href={item.link} className={isActive ? "font-extrabold text[30px]": ""}>
              <p className="px-3">{item.name}</p>
              </Link>
            )
          )
        })}
      </div>
    </div>
  );
}

export default Navbar;
