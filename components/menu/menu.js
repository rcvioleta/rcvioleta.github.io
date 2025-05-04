const mappedLinks = [
	{
		title: "About",
		href: "#about",
		className: undefined,
	},
	{
		title: "Work/Experience",
		href: "#work-experience",
		className: undefined,
	},
	{
		title: "Contact",
		href: "#contact",
		className: undefined,
	},
	{
		title: "Resume",
		href: "/resume.pdf",
		className: "transparent-btn",
	},
];

export default function Menu({
	isHiddenMobileMenu,
	navItemClickHandler,
	styles,
}) {
	return (
		<ul className={isHiddenMobileMenu ? styles["nav-items"] : ""}>
			{mappedLinks.map(({ href, title, className }, index) => (
				<li key={index}>
					<a href={href} onClick={navItemClickHandler}>
						<h3 className={className}>{title}</h3>
					</a>
				</li>
			))}
		</ul>
	);
}
