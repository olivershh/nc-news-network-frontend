import { Link } from "react-router-dom";

export default function Titlebar() {
  return (
    <div className="title-bar-site-wide">
      <Link to="/">
        <h1>NCNN</h1>
      </Link>
    </div>
  );
}
