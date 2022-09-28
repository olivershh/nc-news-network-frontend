export default function Loading({ isLoading, children, largeIcon = false }) {
  const loadIcon = largeIcon ? "LOADING..." : "loading...";

  return isLoading ? <p>Loading...</p> : children;
}
