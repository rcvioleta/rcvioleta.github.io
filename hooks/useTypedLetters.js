import { useEffect, useState } from "react";

const DEFAULT_TIMEOUT = 80;

export const useTypedLetters = ({ text, typingDelay = DEFAULT_TIMEOUT }) => {
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
			}, typingDelay);

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
			}, typingDelay);

			return () => {
				clearTimeout(timeout);
			};
		}
	}, [typedLetter, isDoneTyping]);

	return typedLetter;
};
