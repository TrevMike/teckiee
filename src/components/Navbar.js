import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";

function Navbar() {
  const menu = useSelector(state => state.menu.topMenu.mainTopMenu);
  return (
    <div className="relative z-50 w-full">
      <nav className="fixed top-0 left-0 right-0 flex justify-between bg-gradient-to-r from-violet-700 to-violet-400 ... shadow-lg shadow-sky-950/50">
        <Link href="/" className="">
          <div className="flex items-center justify-center relative w-14 h-14 ">
            <Image
              src="/robotHead.svg"
              alt="Robot Head Logo"
              fill
              priority={true}
              className="ml-4"
            />
          </div>
        </Link>
        <ul className="flex justify-evenly w-6/12 text-slate-100 my-4">
          {menu.map((item, index) => {
            return (
              <li key={index} className="font-inter font-normal">
                <Link href={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
