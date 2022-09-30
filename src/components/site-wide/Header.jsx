import Navbar from "./Navbar";
import Titlebar from "./Titlebar";

export default function Header() {
  return (
    <header className="header-site-wide">
      <Titlebar />
      <Navbar />
    </header>
  );
}
