import type { SVGProps } from "react";

export type IconName =
  | "replay"
  | "keyboard"
  | "scissors"
  | "bolt"
  | "loop"
  | "text"
  | "gallery"
  | "palette"
  | "download"
  | "windows"
  | "check"
  | "arrow";

type Props = SVGProps<SVGSVGElement> & { name: IconName };

const paths: Record<IconName, React.ReactNode> = {
  replay: (
    <>
      <path d="M12 8v4l3 2" />
      <path d="M3.5 12a8.5 8.5 0 1 0 2.6-6.1" />
      <path d="M6 3v3.5H2.5" />
    </>
  ),
  keyboard: (
    <>
      <rect x="2.5" y="6" width="19" height="12" rx="2" />
      <path d="M6 9.5h.01M9 9.5h.01M12 9.5h.01M15 9.5h.01M18 9.5h.01M7.5 14h9" />
    </>
  ),
  scissors: (
    <>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <path d="M8 8l12 8M8 16L20 8" />
    </>
  ),
  bolt: <path d="M13 2L4.5 13.5H11l-1 8.5L19.5 10H13l0-8z" />,
  loop: (
    <>
      <path d="M4 9a8 8 0 0 1 13-3l3 3" />
      <path d="M20 15a8 8 0 0 1-13 3l-3-3" />
      <path d="M20 3v6h-6M4 21v-6h6" />
    </>
  ),
  text: (
    <>
      <path d="M4 7V5h16v2" />
      <path d="M9 19h6M12 5v14" />
    </>
  ),
  gallery: (
    <>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M3 15l4.5-4 3.5 3 4-4.5L21 14" />
      <circle cx="8.5" cy="8.5" r="1.3" />
    </>
  ),
  palette: (
    <>
      <path d="M12 3a9 9 0 1 0 0 18c1.4 0 2-1 2-2 0-1.6 1-2 2-2h1.5A3.5 3.5 0 0 0 21 11.5 8.5 8.5 0 0 0 12 3z" />
      <circle cx="7.5" cy="12" r="1.1" />
      <circle cx="10" cy="8" r="1.1" />
      <circle cx="15" cy="8" r="1.1" />
    </>
  ),
  download: (
    <>
      <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" />
    </>
  ),
  windows: (
    <>
      <path d="M3 5.6L10.5 4.5v7.1H3V5.6zM3 12.4h7.5v7.1L3 18.4v-6zM11.5 4.3L21 3v8.6h-9.5V4.3zM11.5 12.4H21V21l-9.5-1.3v-7.3z" />
    </>
  ),
  check: <path d="M4 12l5 5L20 6" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
};

const filled: IconName[] = ["bolt", "windows"];

export function Icon({ name, ...props }: Props) {
  const isFilled = filled.includes(name);
  return (
    <svg
      viewBox="0 0 24 24"
      fill={isFilled ? "currentColor" : "none"}
      stroke={isFilled ? "none" : "currentColor"}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
