export default function PlayListIcon({ onClick }) {
  return (
    <svg
      onClick={onClick}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 5H21H3Z" fill="#FCFCFC" />
      <path
        d="M3 5H21"
        stroke="#FCFCFC"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g opacity="0.6">
        <path d="M3 19H21H3Z" fill="#FCFCFC" />
        <path
          d="M3 19H21"
          stroke="#FCFCFC"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <g opacity="0.6">
        <path d="M3 12H21H3Z" fill="#FCFCFC" />
        <path
          d="M3 12H21"
          stroke="#FCFCFC"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
