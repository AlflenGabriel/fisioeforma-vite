// Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="bg-sky-400 w-full">
      <div className="w-11/12 mx-auto">
        <div className="flex justify-between items-center w-full sm:px-40">
          <div className="logo w-20 drop-shadow-x z-20 cursor-pointer py-2">
            {/* Exemplo com imagem local */}
            <h1>LOGO</h1>
          </div>

          {/* Primary menu */}
          <div className="hidden lg:flex flex-grow justify-end">
            <ul className="flex gap-8 text-white text-xl">
              {["Hero", "AboutHome", "Cards", "Contact"].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    className="relative w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-custom1 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left cursor-pointer"
                  >
                    {item === "Hero"
                      ? "Home"
                      : item === "AboutHome"
                      ? "Atendimento"
                      : item === "Cards"
                      ? "Serviços"
                      : "Contato"}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile toggle */}
          <div className="flex gap-6 items-center lg:hidden">
            <button onClick={() => setToggleMenu(!toggleMenu)}>
              <Menu className="w-8 h-8 cursor-pointer text-white mr-12" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        className={`z-40 w-full bg-sky-400 overflow-hidden flex flex-col lg:hidden origin-top duration-700 ${
          !toggleMenu ? "h-0" : "h-[170px]"
        }`}
      >
        <div className="px-8 flex justify-center items-center text-center">
          <ul className="text-lg flex flex-col space-y-2 py-4 text-white">
            {["Hero", "AboutHome", "Cards", "Contact"].map((item, index) => (
              <li key={index}>
                <Link
                  to={item}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  className="hover:underline cursor-pointer"
                >
                  {item === "Hero"
                    ? "Home"
                    : item === "AboutHome"
                    ? "Atendimento"
                    : item === "Cards"
                    ? "Serviços"
                    : "Contato"}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
