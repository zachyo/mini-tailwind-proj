const Hero = () => {
  return (
    // <section id="hero">
      <div className="container flex flex-col-reverse  items-center px-6 mx-auto mt-10 space-y-0 md:flex-row md:space-y-0">
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className="mw-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
            Bringing everyone together to build better products
          </h1>
          <p className="mw-w-sm text-center text-darkGrayishBlue md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            laudantium libero odit! Blanditiis magni nihil vitae nostrum odio
            dicta quos at sequi.
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="/"
              className="p-3 px-6 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block"
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="md:w-1/2"><img src="" alt="illustration" /></div>
      </div>
    // </section>
  );
};

export default Hero;
