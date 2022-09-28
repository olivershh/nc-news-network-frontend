import { Link } from "react-router-dom";

export default function ErrorBoxSmall({ errorOptions }) {
  return (
    <div className="error-msg-small">
      <h3>{errorOptions.msg}</h3>
      <Link to={errorOptions.linkRoute}>{errorOptions.linkText}</Link>
    </div>
  );
}

// ErrorBoxSmall.defaultProps = {
//     msg: "Sorry something went wrong",
//     linkText: "Head back home",
//     linkRoute: "/"
// }
