import logoW from "./img/logo-white.svg";
import facebook from "./img/icon-facebook.svg";
import instagram from "./img/icon-instagram.svg";
import twitter from "./img/icon-twitter.svg";
import pinterest from "./img/icon-pinterest.svg";
import youtube from "./img/icon-youtube.svg";


const Footer = () => {
  return (
    <footer className="bg-veryDarkBlue">
      <div className="container flex flex-col-reverse mx-auto py-6 px-10 space-y-8 justify-between md:flex-row md:space-y-0">
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:items-start md:space-y-0">
          <div className="text-white my-6 md:hidden">
            Copyright &copy; 2022, All Rights Reserved
          </div>
          <div>
            <img src={logoW} alt="Logo" className="h-8" />
          </div>
          <div className="flex justify-center space-x-4">
            <a href="/">
              <img src={facebook} alt="Facebook" className="h-8" />
            </a>
            <a href="/">
              <img src={twitter} alt="Facebook" className="h-8" />
            </a>
            <a href="/">
              <img src={instagram} alt="Facebook" className="h-8" />
            </a>
            <a href="/">
              <img src={pinterest} alt="Facebook" className="h-8" />
            </a>
            <a href="/">
              <img src={youtube} alt="Facebook" className="h-8" />
            </a>
          </div>
        </div>
        <div className="flex justify-around space-x-24">
          <div className="flex flex-col space-y-4 text-left text-white">
            <a href="/" className="hover:text-brightRed">
              Home
            </a>
            <a href="/" className="hover:text-brightRed">
              Pricing
            </a>
            <a href="/" className="hover:text-brightRed">
              Products
            </a>
            <a href="/" className="hover:text-brightRed">
              About
            </a> 
          </div>
          <div className="flex flex-col space-y-4 text-left">
            <a href="/" className="text-white hover:text-brightRed">
              Careers
            </a>
            <a href="/" className="text-white hover:text-brightRed">
              Community
            </a>
            <a href="/" className="text-white hover:text-brightRed">
              Privacy Policy
            </a>
          </div>
        </div>
        <div className="flex flex-col text-left justify-between">
          <div>
            <h2 className="font-bold text-lg  text-white mb-3">Subscribe</h2>
            <form>
              <div className="flex space-x-4">
                <input
                  type="email"
                  className="flex-1 px-4 py-2 rounded-full focus:outline-none"
                  placeholder="email address"
                />
                <button className="px-6 py-2 bg-brightRed text-white rounded-full hover:bg-brightRedLight focus:outline-none">
                  Go
                </button>
              </div>
            </form>
          </div>
          <div className="hidden text-white md:block">
            Copyright &copy; 2022, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
