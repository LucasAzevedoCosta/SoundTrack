export default function AdicionarIcon({onClick}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 24 24"
      fill="#FFF"
      onClick={onClick}
    >
      <path
        d="M12 4V20M20 12L4 12"
        stroke="#DDD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
