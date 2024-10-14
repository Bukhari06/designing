import Image from "next/image";

const Header = () => {
      return (
        <header className="bg-black text-white p-5">
<div className= "container mx-auto flex justify-between item-center">
   
                   <Image src="/logo1.png"
                    alt=""
                    width={100}
                    height={400} 
               />


    <h1 className="text-3xl font-bold">
    𝓜𝔂 𝓝𝓮𝔁𝓽.𝓳𝓼 𝓦𝓮𝓫𝓼𝓲𝓽𝓮</h1>
    <nav>
    <ul className="flex space-x-6">

    <li>
    <a href="/" className="hover:text-red-500">Home</a>
</li>

<li>
    <a href="/" className="hover:text-red-500">About</a>
</li>

<li>
    <a href="/" className="hover:text-red-500">Contact</a>
</li>
    </ul>
</nav>
    </div>
</header>
      );

      };

      export default Header;
