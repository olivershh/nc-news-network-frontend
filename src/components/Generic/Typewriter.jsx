import { useEffect, useState } from "react";

export default function TypeWriter({ string, speed }) {
  const [currentString, setCurrentString] = useState("");
  const stringArray = string.split("");

  useEffect(() => {
    if (currentString.length < string.length) {
      setTimeout(() => {
        setCurrentString((prev) => {
          return `${prev}${string[prev.length]}`;
        });
      }, speed);
    }
  }, [currentString]);

  return <p className="typewriter">{currentString}</p>;
}
