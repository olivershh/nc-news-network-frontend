import Navbar from "./Navbar";
import Titlebar from "./Titlebar";

export default function Header() {
  return (
    <div className="header-site-wide">
      <Titlebar />
      <Navbar />
    </div>
  );
}
