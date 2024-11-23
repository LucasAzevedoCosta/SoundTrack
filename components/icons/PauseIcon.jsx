export default function PauseIcon({ onClick }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#FFF"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      onClick={onClick}
    >
      <path d="M11 22h-4v-20h4v20zm6-20h-4v20h4v-20z" />
    </svg>
  );
}
