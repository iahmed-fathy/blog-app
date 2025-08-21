import Logo from "./Logo";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="grid grid-cols-3 max-sm:grid-cols-2 items-center justify-between text-center">
      <div className="order-1">
        <Logo />
      </div>

      <div className="order-2 max-sm:order-3 max-sm:col-span-2 max-sm:mt-8">
        <NavBar />
      </div>

      <div className="grid order-3 max-sm:order-2 justify-end">
        <SearchBar />
      </div>
    </header>
  );
}
