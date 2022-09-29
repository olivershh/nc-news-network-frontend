import ErrorBox from "../components/Generic/ErrorBox";

export default function PageNotFound() {
  const errorOptions = {
    msg: "Looks like that page doesn't exist",
    linkText: "Head back to home",
    linkRoute: "/",
  };

  return <ErrorBox errorOptions={errorOptions} />;
}
