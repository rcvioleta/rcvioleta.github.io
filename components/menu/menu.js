export default function Menu({
	isHiddenMobileMenu,
	navItemClickHandler,
	styles,
	links,
}) {
	return (
		<ul className={isHiddenMobileMenu ? styles["nav-items"] : ""}>
			{links.map(({ href, title, className }, index) => (
				<li key={index}>
					<a href={href} onClick={navItemClickHandler}>
						<h3 className={className}>{title}</h3>
					</a>
				</li>
			))}
		</ul>
	);
}
