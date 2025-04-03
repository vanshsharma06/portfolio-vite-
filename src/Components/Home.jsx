import { Instagram, Linkedin, Github } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <div id="main" className="overflow-x-hidden overflow-y-hidden">
      {/* Navigation */}
      <div
        id="nav"
        className="fixed top-0 w-full flex items-center justify-center bg-white border-b-2  border-black shadow-lg z-50 md:py-1"
      >
        <li className="list-none mx-2 md:mx-6 text-[15px] md:text-2xl">
          <a
            href="#page1"
            className="text-black font-bold hover:text-[#17eac3] transition-colors"
            style={{ color: "black" }}
          >
            Home
          </a>
        </li>
        <li className="list-none mx-2 md:mx-6 text-[15px] md:text-2xl">
          <a
            href="#page2"
            className="text-black font-bold hover:text-[#17eac3] transition-colors"
            style={{ color: "black" }}
          >
            About
          </a>
        </li>
        <div className="logo mx-4 md:mx-10 relative text-[25px] py-4">
          <h1 className="text-3xl md:text-4xl lg:text-7xl font-ballu font-bold text-black">
            VAN
            <span className="text-[#17eac3]">SH</span>
          </h1>
        </div>
        <li className="list-none mx-2 md:mx-6 text-[15px] md:text-2xl">
          <a
            href="#page3"
            className="text-black font-bold hover:text-[#17eac3] transition-colors"
            style={{ color: "black" }}
          >
            Works
          </a>
        </li>
        <li className="list-none mx-2 md:mx-6 text-[15px] md:text-2xl">
          <a
            href="#page4"
            className="text-black font-bold hover:text-[#17eac3] transition-colors"
            style={{ color: "black" }}
          >
            Connect
          </a>
        </li>
      </div>

      {/* Page 1 - Home */}
      <div
        id="page1"
        className="w-full h-[90vh] bg-gradient-to-t from-white to-[#cb902a] pt-[8vw]"
      >
        <div
          id="intro"
          className="flex flex-col pt-[25vh] md:pl-[20vw] px-6 md:px-0"
        >
          <h2 className="text-5xl md:text-[6.8vw] mb-[-20px] font-ballu font-bold">
            Hi!
          </h2>
          <h1 className="text-5xl md:text-[6.6vw] font-ballu font-bold mt-5 text-black">
            I am{" "}
            <span className="text-[#2e9380]">
              <Typewriter
                words={["Vansh Sharma", "a Web Developer", "a Programmer"]}
                loop={true}
                cursor
                cursorStyle=" "
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <h3 className="text-2xl md:text-[2.9vw] mt-[3px] text-gray-600">
            Web Developer | Programmer
          </h3>
          <div className="btn mt-[9vh]">
            <a href="#page4">
              <h3 className="inline-block text-xl md:text-[2vw] text-black border-2 border-black bg-[#17eac3] px-8 py-3 rounded-[30px] shadow-[4px_4px_20px_black] hover:shadow-[0_0_10px_white]">
                Get in Touch
              </h3>
            </a>
          </div>
        </div>
      </div>

      {/* Page 2 - About */}
      <div
        id="page2"
        className="h-[90vh] md:h-[90vh] md:w-full flex flex-col md:flex-row pt-[8vw] md:pt-[26vw]"
      >
        <div
          id="left"
          className="w-full md:w-[25vw] h-[70vh] pt-5 flex justify-center"
        >
          <div className="image mt-[2vh] md:mt-[20vh] md:ml-[3vw] h-[55vh] md:h-[75vh] w-[80vw] md:w-[442vw] border-4 border-[#17eac3] rounded-[55px] shadow-[4px_4px_20px_black]">
            <img
              src="/assets/me01.jpeg" // ✅ Correct Path
              alt="Vansh Sharma"
              className="md:ml-[0.8vw] mt-[2vh] h-[50vh] md:h-[70vh] w-[90%] md:w-[20vw] mx-auto rounded-[40px]"
            />
          </div>
        </div>

        <div
          id="right"
          className="w-full md:w-[70vw] h-full pt-5 px-4 md:pr-[40px]"
        >
          <div className="heading text-center">
            <h1 className="text-4xl md:text-[4.6vw] font-ballu font-bold mb-[-40px] text-black">
              About <span className="text-[#17eac3] font-ballu">Vansh</span>
            </h1>
          </div>
          <div className="sub-heading">
            <h3 className="text-xl md:text-[2vw] tracking-[8px] text-center mt-[50px] mb-[50px] text-gray-600">
              Introduction
            </h3>
          </div>
          <div className="para">
          <p className="text-lg md:text-[2vw] mt-[-40px] mb-[4vh] md:mb-[7vh] md:px-4 leading-relaxed ">

              As a skilled web developer and programmer, I create captivating
              digital experiences. My portfolio showcases my expertise in
              crafting dynamic and interactive websites using HTML, CSS, and
              JavaScript. I'm adept at incorporating cutting-edge technologies
              and animation libraries to create engaging user interfaces. From
              responsive designs to backend development, I bring a holistic
              approach to every project. My passion for innovation and attention
              to detail ensures exceptional results for clients and users alike.
            </p>
            <a
              href="#page4"
              className="inline-block border-2 border-black px-10 py-3 rounded-[40px] text-black shadow-[6px_6px_0_#17eac3] hover:shadow-none hover:bg-[#17eac3] transition-all duration-500"
            >
              <h3 className="text-lg md:text-[1.4vw]">Hire Me</h3>
            </a>
          </div>
        </div>
      </div>

      {/* Page 3 - Works */}
      <div
        id="page3"
        className="w-full h-[80vh] md:h-[20vh] pt-[95vw] md:pt-[15vw] px-4 md:px-[4vw] mt-44 md:mt-96"
      >
        <div className="heading text-center">
          <h1 className="text-4xl md:text-[4.6vw] font-ballu font-bold mb-[-6vh]">
            Best <span className="text-[#17eac3]">Works</span>
          </h1>
        </div>
        <div className="sub-heading text-center">
          <h3 className="text-xl md:text-[2vw] tracking-[8px] text-gray-600 mt-14">
            Personal Projects
          </h3>
        </div>

        <div className="images-link mt-[10vh] flex flex-col md:flex-row justify-between">
          <div className="1-img flex flex-col items-center mb-8 md:mb-0">
            <img
              src="Project1.png"
              alt="Project 1"
              className="w-full md:w-[28vw] rounded-[20px] shadow-[8px_8px_40px_black] mb-[6vh] transition-all duration-500 hover:-translate-y-4"
            />
            <a
              href="https://singhsubm.github.io/landing_page/"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
            >
              <h3 className="btn text-center border-l-2 border-b-2 border-black px-10 py-2 rounded-[40px] text-black shadow-[-5px_5px_0_#17eac3] hover:shadow-none hover:bg-[#17eac3] transition-all duration-500">
                Visit
              </h3>
            </a>
          </div>

          <div className="2-img flex flex-col items-center mb-8 md:mb-0">
            <img
              src="Project2.png"
              alt="Project 2"
              className="w-full md:w-[28vw] rounded-[20px] shadow-[8px_8px_40px_black] mb-[6vh] transition-all duration-500 hover:-translate-y-4"
            />
            <a
              href="https://vanshsharma06.github.io/Tic-Tac_Toe/"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
            >
              <h3 className="btn text-center border-l-2 border-b-2 border-black px-10 py-2 rounded-[40px] text-black shadow-[-5px_5px_0_#17eac3] hover:shadow-none hover:bg-[#17eac3] transition-all duration-500">
                Visit
              </h3>
            </a>
          </div>

          <div className="3-img flex flex-col items-center">
            <img
              src="Project3.png"
              alt="Project 3"
              className="w-full md:w-[28vw] rounded-[20px] shadow-[8px_8px_40px_black] mb-[6vh] transition-all duration-500 hover:-translate-y-4"
            />
            <a
              href="https://singhsubm.github.io/Clash_Of-_Clans_SinghSubm/"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
            >
              <h3 className="btn text-center border-l-2 border-b-2 border-black px-10 py-2 rounded-[40px] text-black shadow-[-5px_5px_0_#17eac3] hover:shadow-none hover:bg-[#17eac3] transition-all duration-500">
                Visit
              </h3>
            </a>
          </div>
        </div>
      </div>

      {/* Page 4 - Contact */}
      <div id="page4" className="w-full h-[90vh] mt-[52px] pt-[90vw]">
        <div
          id="skills"
          className="h-[10vh] md:h-[20vh] w-[90vw] mx-[5vw] flex flex-wrap items-center justify-between border-t-[3px] border-b-[3px] border-dashed border-black"
        >
          <h1 className="font-sans text-[18px] md:text-[3vw] cursor-pointer hover:rotate-[10deg] hover:shadow-[6px_6px_10px_black] transition-all duration-500">
            HTML5
          </h1>
          <h1 className="font-sans text-[18px] md:text-[3vw] cursor-pointer text-[#17eac3] hover:rotate-[10deg] hover:shadow-[6px_6px_10px_black] transition-all duration-500">
            CSS3
          </h1>
          <h1 className="font-sans text-[18px] md:text-[3vw] cursor-pointer hover:rotate-[10deg] hover:shadow-[6px_6px_10px_black] transition-all duration-500">
            JAVASCRIPT
          </h1>
          <h1 className="font-sans text-[18px] md:text-[3vw] cursor-pointer text-[#17eac3] hover:rotate-[10deg] hover:shadow-[6px_6px_10px_black] transition-all duration-500">
            PYTHON
          </h1>
          <h1 className="font-sans text-[18px] md:text-[3vw] cursor-pointer hover:rotate-[10deg] hover:shadow-[6px_6px_10px_black] transition-all duration-500">
            C++
          </h1>
        </div>

        <div id="get-in-touch">
          <h1 className="mt-[5vh] md:mt-[12vh] text-4xl md:text-[4.7vw] text-center font-ballu font-bold">
            Get in{" "}
            <span className="text-[#17eac3] font-ballu font-bold">Touch</span>
          </h1>

          <div id="left-right" className="h-[60vh] flex flex-col md:flex-row">
            <div id="left" className="w-full md:w-[30vw] py-[10vh] px-[5vw]">
              <div className="social mt-20">
                <h1 className="text-center mb-[2vh] font-sans text-gray-600 text-[18px] md:text-[3vw] tracking-[1vw]">
                  Social <span className="text-[#17eac3] ">Links</span>
                </h1>
                <div className="social-links flex justify-center space-x-5">
                  <a
                    href="https://instagram.com/___vansh._.sharma__?utm_source=qr&igshid=OGIxMTE0OTdkZA=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline"
                  >
                    <Instagram
                      className="text-pink-500 mx-[0.5vw] cursor-pointer"
                      size={40} // Icon Size (px)
                      strokeWidth={1.5} // Border Thickness
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/vansh-sharma-063258261/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline"
                  >
                    <Linkedin
                      className="text-blue-600 hover:text-blue-800 transition-all duration-300"
                      size={40} // Size set kar sakte ho
                      strokeWidth={1.5} // Thickness control
                    />
                  </a>

                  {/* GitHub Icon */}
                  <a
                    href="https://github.com/vanshsharma06"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline"
                  >
                    <Github
                      className="text-black hover:text-gray-600 transition-all duration-300"
                      size={40}
                      strokeWidth={1.5}
                    />
                  </a>
                </div>
              </div>
            </div>

            <div
              id="right"
              className="w-full md:w-[70vw] py-0 px-[5vw] flex flex-col items-center"
            >
              <div className="contact flex flex-col items-center">
                <h1 className="text-gray-700 font-bold mt-10 text-[25px] md:text-[3vw] tracking-widest text-center">
                  Contact <span className="text-[#17eac3]">Me</span>
                </h1>

                <div className="form w-full max-w-[90vw] md:max-w-[60vw] bg-white p-6 md:p-8 mt-6 rounded-[20px] shadow-lg border-2 border-gray-300">
                  <form
                    action="https://formspree.io/f/xoqodzry"
                    method="POST"
                    target="_blank"
                  >
                    {/* Email Field */}
                    <div className="mb-4">
                      <label className="text-lg md:text-[1.7vw] font-semibold text-gray-700">
                        Email:
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter Your Email"
                        required
                        className="w-full mt-2 px-[1vw] py-[1vh] font-sans bg-[#17eac3] border-none rounded-[10px] border-2 border-black shadow-[3px_3px_8px_black] focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>

                    {/* Name Field */}
                    <div className="mb-4">
                      <label className="text-lg md:text-[1.7vw] font-semibold text-gray-700">
                        Name:
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter Your Name"
                        required
                        className="w-full mt-2 px-[1vw] py-[1vh] font-sans bg-[#17eac3] border-none rounded-[10px] border-2 border-black shadow-[3px_3px_8px_black] focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>

                    {/* Query Field */}
                    <div className="mb-4">
                      <label className="text-lg md:text-[1.7vw] font-semibold text-gray-700">
                        Any Query:
                      </label>
                      <textarea
                        name="query"
                        id="query"
                        cols={30}
                        rows={5}
                        placeholder="Write Your Query"
                        className="w-full mt-2 py-[1.5vh] px-[1.5vw] font-sans bg-[#17eac3] border-none rounded-[10px] border-2 border-black shadow-[3px_3px_8px_black] focus:outline-none focus:ring-2 focus:ring-black"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center mt-10">
                      <button
                        type="submit"
                        className="text-xl md:text-[2vw] font-bold py-[1vh] px-[3vw] border-2 border-black rounded-[40px] shadow-[4px_4px_0_#17eac3] hover:shadow-none hover:bg-[#17eac3] hover:text-black transition-all duration-300"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div
            id="footer"
            className="w-full h-[45vh] px-1 flex justify-center items-center"
          >
            <h3 className="text-[17px] mt-180 md:text-xl md:pb-[17px]">
              <p>Crafted with ❤️ by Vansh Sharma. </p>
              <p className="flex justify-center">
                © 2023. All rights reserved.
              </p>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
