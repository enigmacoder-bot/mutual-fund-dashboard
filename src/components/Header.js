import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";

const Header = () => {
  return (
    <header className="mx-4 mb-8">
      <h1 className="font-mono text-3xl text-purple-600 text-center font-medium tracking-wide my-6">
        <Link to="/">
          MUTUAL FUND <span className="text-orange-600">DASHBOARD</span>
        </Link>
      </h1>
      <SearchForm />
    </header>
  );
};

export default Header;
