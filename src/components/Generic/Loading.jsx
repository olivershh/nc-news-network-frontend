export default function Loading({ isLoading, children, largeIcon = false }) {
  const loadClassName = largeIcon ? "loading-icon-big" : "loading-icon-small";

  return isLoading ? <div class={loadClassName}></div> : children;
}
