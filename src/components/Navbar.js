import Link from "next/link";

function Navbar() {
  return (
    <div className="relative z-50 w-full">
      <nav className="fixed top-0 left-0 right-0 flex justify-between bg-gradient-to-r from-violet-700 to-violet-400 ... ">
        <div className="flex items-center">Logo</div>
        <ul className="flex justify-evenly w-6/12 text-slate-100 my-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/our_services">Our Services</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/contact_us">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
