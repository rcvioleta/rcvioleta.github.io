import { useTypedLetters } from "./../../hooks/useTypedLetters";

import styles from "./hero-section.module.css";

import { email } from "../../config/contact";
import { pitch, text, typingDelay } from "../../config/hero-settings";

export default function HeroSection() {
	const typedLetter = useTypedLetters({ text, typingDelay });

	return (
		<section id={styles.hero}>
			<div id={styles.greetings}>
				<h2>Hi, my name is</h2>
			</div>
			<div id={styles.name}>
				<h2>Rogene Cris Violeta</h2>
			</div>
			<div id={styles.pitch}>
				<h2>
					{typedLetter}
					<span className="cursor"></span>
				</h2>
				<noscript>
					You need to enable Javascript in order to see the text.
				</noscript>
			</div>
			<div>
				<p
					id={styles["pitch-subtext"]}
					dangerouslySetInnerHTML={{
						__html: pitch,
					}}
				></p>
			</div>
			<div>
				<a href={`mailto:${email}`} className="transparent-btn mt2rem">
					Contact Me
				</a>
			</div>
		</section>
	);
}
