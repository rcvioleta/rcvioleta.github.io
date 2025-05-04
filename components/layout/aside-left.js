import styles from "./aside-left.module.css";

const links = [
	{
		href: "https://github.com/rcvioleta",
		className: "fab fa-github",
	},
	{
		href: "https://codepen.io/rcvioleta13",
		className: "fab fa-codepen",
	},
	{
		href: "https://www.linkedin.com/in/rcvioleta/",
		className: "fab fa-linkedin",
	},
	{
		href: "https://www.youtube.com/@roviotech9072",
		className: "fab fa-youtube",
	},
];

export default function AsideLeft(props) {
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
