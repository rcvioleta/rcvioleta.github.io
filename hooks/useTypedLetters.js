import { useEffect, useState } from "react";

const text = "Simplifying your life, one web app at a time!";
const DEFAULT_TIMEOUT = 80;

export const useTypedLetters = () => {
  const [typedLetter, setTypedLetter] = useState("");
  const [isDoneTyping, setIsDoneTyping] = useState(false);

  useEffect(() => {
    if (!isDoneTyping) {
      const timeout = setTimeout(() => {
        const nextTypedLetter = text.slice(0, typedLetter.length + 1);

        if (nextTypedLetter === typedLetter) {
          setIsDoneTyping((prevState) => !prevState);
          return;
        }

        setTypedLetter(text.slice(0, typedLetter.length + 1));
      }, DEFAULT_TIMEOUT);

      return () => {
        clearTimeout(timeout);
      };
    }

    if (isDoneTyping) {
      const timeout = setTimeout(() => {
        if (!typedLetter) {
          setIsDoneTyping((prevState) => !prevState);
          return;
        }

        setTypedLetter(text.slice(0, typedLetter.length - 1));
      }, DEFAULT_TIMEOUT);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [typedLetter, isDoneTyping]);

  return typedLetter;
};
