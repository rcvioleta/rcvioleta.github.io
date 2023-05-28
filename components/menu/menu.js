export default function Menu({
  isHiddenMobileMenu,
  navItemClickHandler,
  styles,
}) {
  const isProduction = process.env.NODE_ENV === "development" ? false : true;

  return (
    <ul className={isHiddenMobileMenu ? styles["nav-items"] : ""}>
      <li>
        <a href="#about-section" onClick={navItemClickHandler}>
          <h3>About</h3>
        </a>
      </li>
      <li>
        <a href="#work-experience-section" onClick={navItemClickHandler}>
          <h3>Work/Experience</h3>
        </a>
      </li>
      <li>
        <a href="#contact-section" onClick={navItemClickHandler}>
          <h3>Contact</h3>
        </a>
      </li>
      <li>
        <a href={`${isProduction ? "/portfolio" : ""}/resume.pdf`}>
          <h3 className="transparent-btn">Resume</h3>
        </a>
      </li>
    </ul>
  );
}
