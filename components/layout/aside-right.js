import styles from "./aside-right.module.css";

export default function AsideRight({ email }) {
	return (
		<div className={styles.right}>
			<div className={styles.container}>
				<a href={`mailto:${email}`}>{email}</a>
			</div>
		</div>
	);
}
