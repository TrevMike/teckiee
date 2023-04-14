import Link from "next/link";

function Footer() {
  return (
    <footer>
      <div>
        <h3>Teckiee</h3>
        <ul>
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
      <div>
        <h3>Info</h3>
        <ul>
          <li>
            <Link href="/faqs">FAQs</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
