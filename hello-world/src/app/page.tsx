import Image from "next/image";
import babyGif from "../../public/baby.gif";

export default function Home() {
  return (
      <div className="flex flex-col bg-black text-white h-[100vh] justify-center items-center">
        <h1 className=" text-[70px] uppercase font-extrabold">!Welcome Buddy</h1>
        <h2 className="text-[30px] mb-[10px]">Unlocking New Powers with Next.js</h2>
        <div className="w-[60%] text-center">
        <p>I am thrilled about the possibilities that Next.js is set to unlock for developers everywhere! This powerful framework not only streamlines the development process but also enhances performance and scalability, allowing us to create dynamic web applications with ease. With features like server-side rendering, static site generation, and API routes, Next.js empowers us to build faster, more efficient applications that can handle modern web demands. I can&apos;t wait to dive in and explore all the innovative capabilities it offers, transforming the way we approach web development!</p>
        </div>
        <Image className="w-[300px] mt-[30px]" src={babyGif} alt="excited"/>
      </div>
      
  );
}
