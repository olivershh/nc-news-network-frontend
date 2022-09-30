import { useEffect, useState } from "react";

export default function TypeWriter({ string, speed }) {
  const [currentString, setCurrentString] = useState("");
  const stringArray = string.split("");

  useEffect(() => {
    console.log("rendering");
    if (currentString.length < string.length) {
      setTimeout(() => {
        setCurrentString((prev) => {
          return `${prev}${string[prev.length]}`;
        });
      }, speed);
    }
  }, [currentString]);

  //   typewriter(string);

  //   function typewrite() {
  //     if (!stringArray) return;
  //     setCurrentString((prev) => `${stringArray[0]}${prev}`);
  //     stringArray.shift();
  //     setTimeout(() => {
  //       typewrite();
  //     }, 1000);
  //   }

  //   typewrite();

  return <p className="typewriter">{currentString}</p>;
}
