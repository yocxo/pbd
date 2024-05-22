export default function Header() {
  return (
    <header className="bg-card">
      <nav
        className="container mx-auto flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Pale Blue Dot</span>
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 72 72"
              id="emoji"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="color">
                <circle cx="36" cy="36.0001" r="28" fill="#61b2e4" />
              </g>
            </svg>
          </a>
        </div>
      </nav>
    </header>
  );
}
