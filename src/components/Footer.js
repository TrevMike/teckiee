import Link from "next/link";

function Footer() {
  return (
    <footer>
      <div className="flex p-6">
        <div className="flex flex-col">
          <h3>Teckiee</h3>
          <ul className="text-slate-400">
            <li>
              <Link href="/our_services">Services</Link>
            </li>
            <li>
              <Link href="/portfolio">Project</Link>
            </li>
            <li>
              <Link href="/contact_us">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3>Info</h3>
          <ul className="text-slate-400">
            <li>
              <Link href="/faqs">FAQs</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-slate-100 bg-indigo-950 py-6 text-center">
        All rights reserved Teckiee 2023
      </div>
    </footer>
  );
}
export default Footer;
