import logo from './img/logo.svg'

const Navbar = () => {
  return (
    <nav className="relative container mx-auto p-4">
      {/* Flex Container  */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="pt-2">
          <img src={logo} alt="logo" />
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

        {/* Hamburger */}
        <button id="menu-btn" className="block harmburger md:hidden">
          <span className="harmburger-top"></span>
          <span className="harmburger-middle"></span>
          <span className="harmburger-btm"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <div
          id="menu"
          className="absolute flex flex-col items-center self-end py-8 mt-2 space-y-6 font-bold bg-white left-6 right-6 drop-shadow-md md:hidden sm:w-auto sm-self-center "
        >
          <a href="/">Pricing</a><a href="/">Product</a><a href="/">About US</a><a href="/">Careers</a><a href="/">Community</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
