'use client';
import { FC, useState } from 'react';
import { Link } from 'react-scroll';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sections: string[] = ['About', 'Skills', 'Projects', 'Contact'];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white fixed w-full z-10 top-0 left-0 shadow-lg">
      <div className="container mx-auto flex items-center justify-between md:justify-center p-4">
        <div className="block md:hidden text-xl font-bold">MyPortfolio</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center space-x-8">
          {sections.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              spy={true} // Enables scroll tracking
              activeClass="text-blue-600 font-bold" // Adds active class on scroll
              className="cursor-pointer text-lg text-white hover:text-gray-400"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? (
              <XMarkIcon className="h-6 w-6 text-white" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700">
          <div className="flex flex-col items-center space-y-4 p-4">
            {sections.map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                onClick={() => {
                  setIsOpen(false);
                }}
                spy={true} // Enables scroll tracking on mobile as well
                activeClass="text-blue-600 font-bold" // Adds active class on scroll
                className="cursor-pointer text-white hover:text-gray-400"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
