

const About = () => {
  return (
    <section id="about" className="bg-white dark:bg-slate-800 dark:text-white">
      <div className="container md:w-[70%] sm:py-16 py-10">
        <div className="grid items-center gap-4 grid-cols-1 sm:grid-cols-2">
          <div className=" font-bold relative">
            <div className=" text-center text-6xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">
              ABOUT
            </div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
              About me
            </h1>
          </div>
          <div className="text-slate-500">
            <p>
            I Sudip Pathak, a frontend developer who believes in making the web both beautiful and functional. With a passion for clean code and modern design, I specialize in turning complex ideas into user-friendly websites.
            </p>
            <br />
            <p>
            As a frontend developer, I blend technical precision with creative design to craft websites that leave a lasting impression. Every line of code I write serves a purpose, whether it's creating seamless animations or building intuitive user interfaces that tell your story.
            </p>
            <div className="">
              <a
                href="../../assets/Fake Resume.pdf"
                className="primary-btn my-6 mr-6 inline-block"
                download
              >
                Download Resume
              </a>
              <a
                href="tel:+977 9849657337"
                title="Call +977 9849657337 "
                className="outline-btn my-6"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
