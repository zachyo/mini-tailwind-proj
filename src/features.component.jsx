const Features = () => {
  return (
    <section>
      <div className="container flex flex-col px-6 mx-auto md:flex-row ">
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2 md:mb-0">
          <h2 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
            What's different about Manage?
          </h2>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            laudantium libero odit! Blanditiis magni nihil vitae nostrum odio
            dicta quos at sequi. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ipsum modi velit qui aut asperiores accusantium!
            Necessitatibus earum repellat mollitia vero obcaecati.
          </p>
        </div>
        <div className="flex flex-col space-y-8 md:w-1/2">
          {/* List Item */}
          <div className="flex flex-col space-y-3 text-left md:items-start md:space-y-0 md:space-x-6 md:flex-row">
            <div className="rounded-l-full bg-brightRedSupLight flex items-center space-x-4 md:bg-transparent">
              <div className="rounded-full text-white py-2 px-6 bg-brightRed md:py-1">
                01
              </div>
              <h3 className="font-bold pr-9 md:hidden ">
                Track company-wide progress
              </h3>
            </div>
            <div>
              <h3 className="hidden font-bold text-lg mb-4 md:block">
                Track company-wide progress
              </h3>
              <p className=" text-darkGrayishBlue">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                laudantium libero odit! Blanditiis magni nihil vitae nostrum
                odio dicta quos at sequi. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Ipsum modi velit qui aut asperiores
                accusantium! Necessitatibus earum repellat mollitia vero
                obcaecati.
              </p>
            </div>
          </div>
          {/* List Item */}
          <div className="flex flex-col space-y-3 text-left md:items-start md:space-y-0 md:space-x-6 md:flex-row">
            <div className="rounded-l-full bg-brightRedSupLight flex items-center space-x-4 md:bg-transparent">
              <div className="rounded-full text-white py-2 px-6 bg-brightRed md:py-1">
                02
              </div>
              <h3 className="font-bold pr-9 md:hidden ">
                Everything you need in one place
              </h3>
            </div>
            <div>
              <h3 className="hidden font-bold text-lg mb-4 md:block">
                Everything you need in one place
              </h3>
              <p className=" text-darkGrayishBlue">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti consequuntur laudantium assumenda maiores eum quibusdam
                provident laboriosam velit? Quae, dolorum magnam voluptatem
                sequi beatae incidunt tempora voluptas harum consequatur esse.
              </p>
            </div>
          </div>
          {/* List Item */}
          <div className="flex flex-col space-y-3 text-left md:items-start md:space-y-0 md:space-x-6 md:flex-row">
            <div className="rounded-l-full bg-brightRedSupLight flex items-center space-x-4 md:bg-transparent">
              <div className="rounded-full text-white py-2 px-6 bg-brightRed md:py-1">
                03
              </div>
              <h3 className="font-bold pr-9 md:hidden ">
                Advanced built-in reports
              </h3>
            </div>
            <div>
              <h3 className="hidden font-bold text-lg mb-4 md:block">
                Advanced built-in reports
              </h3>
              <p className=" text-darkGrayishBlue">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reprehenderit maxime non asperiores doloremque quasi natus quo
                similique earum tempora recusandae eligendi cum distinctio harum
                id, illum totam maiores fugiat. Praesentium.
              </p>
            </div>
          </div>
          {/* <div className="flex flex-col space-y-4">
          <div className="rounded-l-full bg-brightRedSupLight flex items-center space-x-4 md:bg-transparent">
            <div className="rounded-full text-white py-2 px-6 bg-brightRed md:py-1">
              02
            </div>
            <h3 className="font-bold pr-9">Track company-wide progress</h3>
          </div>
          <p className="max-w-sm text-darkGrayishBlue ml-0 text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            laudantium libero odit! Blanditiis magni nihil vitae nostrum odio
            dicta quos at sequi. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ipsum modi velit qui aut asperiores accusantium!
            Necessitatibus earum repellat mollitia vero obcaecati.
          </p>
        </div> */}
        </div>
      </div>
    </section>
  );
};

export default Features;
