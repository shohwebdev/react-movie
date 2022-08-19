export default function Header() {
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo text-decoration-none">
            React Movie App
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="#" className="text-decoration-none">Movie</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
