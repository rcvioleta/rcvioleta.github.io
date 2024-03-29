export default function Menu({
  isHiddenMobileMenu,
  navItemClickHandler,
  styles,
}) {
  return (
    <ul className={isHiddenMobileMenu ? styles["nav-items"] : ""}>
      <li>
        <a href="#about" onClick={navItemClickHandler}>
          <h3>About</h3>
        </a>
      </li>
      <li>
        <a href="#work-experience" onClick={navItemClickHandler}>
          <h3>Work/Experience</h3>
        </a>
      </li>
      <li>
        <a href="#contact" onClick={navItemClickHandler}>
          <h3>Contact</h3>
        </a>
      </li>
      <li>
        <a href="/resume.pdf">
          <h3 className="transparent-btn">Resume</h3>
        </a>
      </li>
    </ul>
  );
}
