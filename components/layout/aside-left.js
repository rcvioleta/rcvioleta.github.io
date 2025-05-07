import styles from "./aside-left.module.css";

export default function AsideLeft({ links = [] }) {
	if (!links.length) {
		return null;
	}

	return (
		<div className={styles.left}>
			<div className={styles.container}>
				<ul>
					{links.map(({ href, className }, index) => (
						<li key={index}>
							<a href={href} target="_blank">
								<i className={className}></i>
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
