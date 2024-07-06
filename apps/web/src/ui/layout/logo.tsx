import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Cruip">
      <span className="sr-only">Pale Blue Dot</span>
      <svg
        width="28px"
        height="28px"
        viewBox="0 0 72 72"
        id="emoji"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="color">
          <circle cx="36" cy="36.0001" r="28" fill="#61b2e4" />
        </g>
      </svg>
    </Link>
  );
}
