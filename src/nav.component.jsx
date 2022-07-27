const Navbar = () => {
  return (
    <nav className="relative container mx-auto p-4">
      {/* Flex Container  */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="pt-2">
          <img src="" alt="logo" />
        </div>
        {/* Menu Items */}
        <div className="hidden space-x-10 md:flex">
          <a href="/" className="hover:text-darkGrayishBlue">
            Pricing
          </a>
          <a href="/" className="hover:text-darkGrayishBlue">
            Product
          </a>
          <a href="/" className="hover:text-darkGrayishBlue">
            About Us
          </a>
          <a href="/" className="hover:text-darkGrayishBlue">
            Careers
          </a>
          <a href="/" className="hover:text-darkGrayishBlue">
            Community
          </a>
        </div>
        <a
          href="/"
          className="hidden  p-3 px-6 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
