const Features = () => {
  return (
    <div className="container flex flex-col items-center px-6 mx-auto md:flex-row ">
      <div className="flex flex-col mb-32 space-y-12 md:w-1/2 md:mb-0">
        <h2 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
          What's different about Manage?
        </h2>
        <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
          laudantium libero odit! Blanditiis magni nihil vitae nostrum odio
          dicta quos at sequi. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ipsum modi velit qui aut asperiores accusantium!
          Necessitatibus earum repellat mollitia vero obcaecati, harum maiores
          doloribus illum facere perferendis in accusamus eligendi.
        </p>
      </div>
      <div className="flex flex-col justify-start space-y-8 md:w-1/2">
        {/* List Item */}
        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
          <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
            <div className="flex items-center space-x-4">
              <div className="rounded-full text-white py-4 px-6 bg-brightRed md:py-1">
                01
              </div>
              <h3 className="font-bold md:mb-4 pr-9 md:hidden">
                Track company-wide progress
              </h3>
            </div>
          </div>
          <h3 className="hidden font-bold text-lg mb-4 md:block ">
            Track company-wide progress
          </h3>

          {/* <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent flex items-center space-x-4">
            <div className="rounded-full text-white py-2 px-4 bg-brightRed md:py-1">
              01
            </div>
            <h3 className="font-bold md:mb-4 pr-9 md:text-base md:hidden">
              Track company-wide progress
            </h3>
            <h3 className="hidden font-bold text-lg mb-4 md:block ">
              Track company-wide progress
            </h3>
          </div> */}
          {/* <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent flex items-center space-x-4">
            <div className="rounded-full text-white py-2 px-4 bg-brightRed md:py-1">
              02
            </div>
            <h3 className="font-bold md:mb-4 pr-9 md:text-base">
              Track company-wide progress
            </h3>
          </div>
          <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent flex items-center space-x-4">
            <div className="rounded-full text-white py-2 px-4 bg-brightRed md:py-1">
              03
            </div>
            <h3 className="font-bold md:mb-4 pr-9 md:text-base">
              Track company-wide progress
            </h3>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Features;
