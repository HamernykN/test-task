import Link from "next/link";

const Header = () => (
  <header className="bg-[#2b3254] text-white p-4">
    <nav className="container mx-auto flex items-center">
      <Link className="md:text-lg font-bold" href="/">
        Test task
      </Link>
      <div className="space-x-2 md:space-x-8 ml-4 md:ml-20">
        <Link href="/">Home</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/about">About</Link>
        <Link href="/contact-us">Contact Us</Link>
      </div>
    </nav>
  </header>
);

export default Header;
