import {NavLink} from "react-router-dom";
import {Link} from "react-scroll";

export default function FixedSidebar() {
  return (
    <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div className="text-center lg:text-left">
        <img
          src="/tamara.jpg"
          width={150}
          height={150}
          alt="tamara lazerka"
          className="rounded-full mx-auto lg:mb-11 lg:ml-28"
        />
        <p className="text-3xl md:text-5xl font-bold mb-1 lg:my-4">
          Tamara Lazerka
        </p>
        <p className="text-lg text-slate-400 font-bold">Fullstack Engineer</p>
      </div>

      <div className="hidden lg:block">
        <div className="flex flex-col gap-4 text-slate-400">
          <Link to="/aboutme" smooth={true}>
            <div className="flex gap-2 items-center ">
              <div className="w-11">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15"
                  ></path>
                </svg>
              </div>
              <p className="headline ">About Me</p>
            </div>
          </Link>

          <Link to="#myskills">
            <div className="flex gap-2 items-center">
              <div className="w-11">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15"
                  ></path>
                </svg>
              </div>
              <p className="hover:bg-slate-700 hover:p-2 hover:rounded-full hover:font-bold color-primary">
                My Skills
              </p>
            </div>
          </Link>

          <Link to="#myprojects">
            <div className="flex gap-2 items-center">
              <div className="w-11">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15"
                  ></path>
                </svg>
              </div>
              <p className="hover:bg-slate-700 hover:p-2 hover:rounded-full hover:font-bold color-primary">
                My Projects
              </p>
            </div>
          </Link>
        </div>
      </div>

      <div className="flex gap-4 my-7 lg:my-0 justify-center lg:justify-normal">
        <a href="https://www.linkedin.com/in/aramattamara/" target="_blank" >
          <img src="/icon-linkedin.png" width={30} height={30} alt="linkedin" />
        </a>
        <a href="https://medium.com/@aramattamara" target="blank">
          <img src="/icon-medium.png" width={30} height={30} target="medium" />
        </a>
        <a href="https://github.com/aramattamara" target="blank">
          <img src="/icon-git.png" width={30} height={30} target="github" />
        </a>
      </div>
    </div>
  );
}
