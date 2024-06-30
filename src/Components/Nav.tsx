import { FC } from "react";
import { Link } from "react-router-dom";

const Nav: FC = () => {
  return (
    <div className="fixed z-10 flex mt-8 bg-transparent items-center justify-center w-full">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-indigo-700 blur-lg animate-pulse"></div>
        <div className="relative flex bg-gray-950 opacity-90 hover:opacity:100 border border-pink-950 hover:scale-105 transition-all ease-linear duration-200 delay-200 rounded-2xl items-center justify-center">
          <Link
            to={"/"}
            className="text-gray-50 py-3 px-4 text-xl font-IBM-Plex-Mono font-bold tracking-wide"
          >
            Photos Collectiions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
