import { useEffect, useState } from "react";

const text = "I build software to make life easy!";
const DEFAULT_TIMEOUT = 90;

export const useTypedLetters = () => {
  const [typedLetter, setTypedLetter] = useState("");
  const [isDoneTyping, setisDoneTyping] = useState(false);

  useEffect(() => {
    if (!isDoneTyping) {
      const timeout = setTimeout(() => {
        const nextTypedLetter = text.slice(0, typedLetter.length + 1);

        if (nextTypedLetter === typedLetter) {
          setisDoneTyping((prevState) => !prevState);
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
          setisDoneTyping((prevState) => !prevState);
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
