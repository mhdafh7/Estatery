import { HomeIcon } from "./Svgs";

const Header = () => {
  return (
    <header className="flex items-center gap-14 py-8 px-8 mb-2 shadow-sm">
      <span className="flex gap-2 items-center font-bold text-violet-700">
        <HomeIcon />
        <h3 className="text-gray-900">Estatery</h3>
      </span>
      <div className="flex justify-between flex-1">
        <nav className="flex items-center">
          <ul className="flex gap-6 text-xs font-semibold text-center">
            <li className="nav-item">Rent</li>
            <li className="nav-item">Buy</li>
            <li className="nav-item">Sell</li>
            <li className="nav-item">Manage Property</li>
            <li className="nav-item">Resources</li>
          </ul>
        </nav>
        <div className="flex gap-3 text-xs">
          <button className="font-semibold rounded-md text-violet-800 border-gray-200 border-solid border-2 px-4 py-2">
            Login
          </button>
          <button className="font-semibold rounded-md px-4 py-2 bg-violet-500 text-white">
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
