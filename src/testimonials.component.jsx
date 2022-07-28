import avatar1 from "./img/avatar-richard.png";
import avatar2 from "./img/avatar-shanai.png";
import avatar3 from "./img/avatar-anisha.png";


const Testimonials = () => {
    return (
      <section id="testimonials" className="lg:bg-white">
        <div className="max-w-6xl mx-auto pt-32 px-5 text-center">
          <h2 className="text-4xl font-bold text-center">
            Testimonials About Manage
          </h2>
          {/* testimonie container */}
          <div className="flex flex-col mt-24 space-y-8 md:flex-row md:space-x-6 md:space-y-0">
            {/* Testimonie 1 */}
            <div className="flex flex-col p-6 items-center rounded-lg bg-veryLightGray md:w-1/3">
              <img
                src={avatar1}
                alt="avatar"
                className="w-16 -mt-14"
              />
              <h5 className="text-lg font-bold">Simon Phillips</h5>
              <p className="text-sm text-darkGrayishBlue">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
                nemo sunt laudantium dolore. Est nihil quibusdam reprehenderit
                rem sequi? Accusamus itaque ex eaque aut libero dicta quasi hic
                perferendis magni.
              </p>
            </div>
            {/* Testimonie 2 */}
            <div className="flex flex-col p-6 items-center rounded-lg bg-veryLightGray md:w-1/3">
              <img
                src={avatar2}
                alt="avatar"
                className="w-16 -mt-14"
              />
              <h5 className="text-lg font-bold">Joseph Alozie</h5>
              <p className="text-sm text-darkGrayishBlue">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
                nemo sunt laudantium dolore. Est nihil quibusdam reprehenderit
                rem sequi? Accusamus itaque ex eaque aut libero dicta quasi hic
                perferendis magni.
              </p>
            </div>
            {/* Testimonie 3 */}
            <div className="flex flex-col p-6 items-center rounded-lg bg-veryLightGray md:w-1/3">
              <img
                src={avatar3}
                alt="avatar"
                className="w-16 -mt-14"
              />
              <h5 className="text-lg font-bold">Tobi Cynthia</h5>
              <p className="text-sm text-darkGrayishBlue">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
                nemo sunt laudantium dolore. Est nihil quibusdam reprehenderit
                rem sequi? Accusamus itaque ex eaque aut libero dicta quasi hic
                perferendis magni.
              </p>
            </div>
          </div>
          <div className="my-16 width-content">
            <a
              href="/"
              className="p-3 px-6 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
            >
              Get Started
            </a>
          </div>
        </div>
        <section id="cta" className="bg-brightRed">
          <div className="container px-6 py-12 mx-auto flex flex-col justify-between items-center bg-brightRed space-y-8 md:flex-row md:space-y-0">
            <h2 className="text-white text-5xl  font-bold text-lg md:text-4xl md:text-left md:max-w-xl">
              Simplify how your team works today
            </h2>
            <a
              href="/"
              className="p-3 px-6 text-brightRed bg-white rounded-full baseline shadow-2xl hover:bg-gray-800"
            >
              Get Started
            </a>
          </div>
        </section>
      </section>
    );
}
 
export default Testimonials;