import { Link } from "react-router-dom";

export default function ErrorBox({ errorOptions }) {
  const defaultMsg = "something went wrong";
  const defaultLinkText = "Head back to all articles";
  const defaultLinkRoute = "/articles";

  return (
    <div className="error-box">
      <h3>{errorOptions?.msg ?? defaultMsg}</h3>
      <Link
        className="error-box-button"
        to={errorOptions?.linkRoute ?? defaultLinkRoute}
      >
        {errorOptions?.linkText ?? defaultLinkText}
      </Link>
      <div className="additional-error-option">
        <br></br>
        {errorOptions.additionalOption && errorOptions.additionalOption}
      </div>
    </div>
  );
}
