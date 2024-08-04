
import { Link } from 'react-router-dom';
import { navListsLeft, navListsRight } from '../constants';
import {darkyyWhiteImg} from '../utils'; // Adjust the import based on your file structure

const Navbar = () => {
  return (
    <header className="absolute w-full py-5 sm:px-10 px-5 flex justify-between items-center z-20">
      <nav className="flex w-full screen-max-width">
        <div className="flex flex-1 justify-start items-center max-sm:hidden">
          {navListsLeft.map((nav, index) => (
            <Link
              key={index} // Use index if nav text is not unique
              to={`/${nav.replace(/\s+/g, '-').toLowerCase()}`} // Replace spaces with hyphens and convert to lowercase
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
            >
              {nav}
            </Link>
          ))}
        </div>
        <Link to="/"> {/* Wrap the image with Link to redirect to home */}
          <img src={darkyyWhiteImg} alt="Logo" width={100} height={100} />
        </Link>
        <div className="flex flex-1 justify-end items-center max-sm:hidden align-center">
          {navListsRight.map((nav, index) => (
            <Link
              key={index} // Use index if nav text is not unique
              to={`/${nav.replace(/\s+/g, '-').toLowerCase()}`} // Replace spaces with hyphens and convert to lowercase
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
            >
              {nav}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
