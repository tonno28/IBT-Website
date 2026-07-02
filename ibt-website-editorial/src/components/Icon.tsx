import type { SVGProps } from "react";

export type IconName =
  | "roadmap"
  | "euro"
  | "document"
  | "crane"
  | "house"
  | "thermometer"
  | "ruler"
  | "droplet"
  | "wind"
  | "scan"
  | "flame"
  | "bulb"
  | "check"
  | "spark"
  | "gear"
  | "target"
  | "handshake"
  | "wrench"
  | "institution"
  | "building"
  | "window"
  | "brick";

const paths: Record<IconName, JSX.Element> = {
  roadmap: (
    <>
      <path d="M9 18l-5 2V6l5-2m0 16 6-2m-6 2V4m6 14 5 2V6l-5-2m0 16V4m0 0L9 6" />
      <circle cx="9" cy="9" r="0.5" fill="currentColor" />
      <circle cx="15" cy="13" r="0.5" fill="currentColor" />
    </>
  ),
  euro: (
    <>
      <path d="M15 8.5A4 4 0 0 0 8.4 11M15 15.5A4 4 0 0 1 8.4 13" />
      <path d="M4 10h7M4 14h6" />
      <circle cx="12" cy="12" r="9" />
    </>
  ),
  document: (
    <>
      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
      <path d="M5 3h9l5 5v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M8 13h8M8 17h5" />
    </>
  ),
  crane: (
    <>
      <path d="M6 21V6l13-1-6 4" />
      <path d="M6 6 4 4m2 2h13" />
      <path d="M19 5v5m0 0-2 2m2-2 2 2" />
      <path d="M4 21h8" />
    </>
  ),
  house: (
    <>
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5 10v10h14V10" />
      <path d="M10 20v-5h4v5" />
    </>
  ),
  thermometer: (
    <>
      <path d="M14 14.76V5a2 2 0 0 0-4 0v9.76a4 4 0 1 0 4 0Z" />
      <path d="M12 9v6" />
    </>
  ),
  ruler: (
    <>
      <path d="M3 17 17 3l4 4L7 21l-4-4Z" />
      <path d="M7 11l2 2M11 7l2 2M9 15l1 1M13 11l1 1" />
    </>
  ),
  droplet: <path d="M12 3.5s6 5.5 6 10a6 6 0 0 1-12 0c0-4.5 6-10 6-10Z" />,
  wind: (
    <>
      <path d="M3 8h9a2.5 2.5 0 1 0-2.5-2.5" />
      <path d="M3 12h13a3 3 0 1 1-3 3" />
      <path d="M3 16h7a2 2 0 1 1-2 2" />
    </>
  ),
  scan: (
    <>
      <path d="M4 8V5a1 1 0 0 1 1-1h3M20 8V5a1 1 0 0 0-1-1h-3M4 16v3a1 1 0 0 0 1 1h3M20 16v3a1 1 0 0 1-1 1h-3" />
      <path d="M4 12h16" />
    </>
  ),
  flame: (
    <>
      <path d="M12 3c1 3 4 4.5 4 8a4 4 0 0 1-8 0c0-1.2.4-2.2 1-3" />
      <path d="M12 21a3 3 0 0 0 3-3c0-2-3-3-3-5-1.5 1-2 2.3-2 3.5A2.5 2.5 0 0 0 12 21Z" />
    </>
  ),
  bulb: (
    <>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 0-4 10.5c.8.8 1 1.3 1 2.5h6c0-1.2.2-1.7 1-2.5A6 6 0 0 0 12 3Z" />
    </>
  ),
  check: <path d="M5 13l4 4L19 7" />,
  spark: (
    <path d="M12 3v4m0 10v4M3 12h4m10 0h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3m0 14v3M2 12h3m14 0h3M4.9 4.9l2.1 2.1m10 10 2.1 2.1m0-14.2-2.1 2.1m-10 10-2.1 2.1" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" />
    </>
  ),
  handshake: (
    <>
      <path d="M8 12 6 10a2 2 0 0 0-3 3l4 4a2 2 0 0 0 3 0l1-1" />
      <path d="m12 9 2-2a2 2 0 0 1 3 0l4 4a2 2 0 0 1 0 3l-2 2" />
      <path d="m9 13 2 2m1-4 2 2" />
    </>
  ),
  wrench: (
    <path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4 2.5-2.5Z" />
  ),
  institution: (
    <>
      <path d="M3 9 12 4l9 5" />
      <path d="M5 9v8m4-8v8m6-8v8m4-8v8M3 20h18" />
    </>
  ),
  building: (
    <>
      <path d="M5 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16" />
      <path d="M15 9h3a1 1 0 0 1 1 1v11M3 21h18" />
      <path d="M8 8h2M8 12h2M8 16h2" />
    </>
  ),
  window: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="1" />
      <path d="M12 4v16M4 12h16" />
    </>
  ),
  brick: (
    <>
      <path d="M3 8h18M3 16h18M3 4h18v16H3z" />
      <path d="M9 4v4m6-4v4M6 8v8m12-8v8M9 16v4m6-4v4" />
    </>
  ),
};

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
}

export default function Icon({ name, className, ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}
