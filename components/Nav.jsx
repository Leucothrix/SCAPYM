import Image from "next/image";
import Link from "next/link";

function Nav() {
  return (
    <div className="">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About Us</a>
      </Link>
      <Link href="/contact">
        <a>Contact Us</a>
      </Link>
    </div>
  );
}

export default Nav;
