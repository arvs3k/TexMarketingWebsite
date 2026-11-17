import type { SVGProps } from "react";

const paths = {
  arrow: <path d="M4 10h11m-4-4.5L15.5 10 11 14.5" />,
  download: <path d="M10 3v10m0 0-4-4m4 4 4-4M4 16.5h12" />,
  check: <path d="m4.5 10.5 3.5 3.5 7.5-8" />,
  mail: (
    <>
      <rect x="3" y="4.5" width="14" height="11" rx="1.5" />
      <path d="m3.5 6 6.5 5 6.5-5" />
    </>
  ),
  phone: (
    <path d="M6.6 3.5H4.8c-.7 0-1.3.6-1.3 1.3 0 6.5 5.2 11.7 11.7 11.7.7 0 1.3-.6 1.3-1.3v-1.8l-3.3-1.3-1.2 1.6a8 8 0 0 1-3.7-3.7l1.6-1.2z" />
  ),
  video: (
    <>
      <rect x="2.5" y="5.5" width="10.5" height="9" rx="1.5" />
      <path d="m13 9 4.5-2.5v7L13 11" />
    </>
  ),
  print: (
    <>
      <path d="M6 7V3.5h8V7M6 14H4.5A1.5 1.5 0 0 1 3 12.5v-4A1.5 1.5 0 0 1 4.5 7h11A1.5 1.5 0 0 1 17 8.5v4a1.5 1.5 0 0 1-1.5 1.5H14" />
      <rect x="6" y="11.5" width="8" height="5" />
    </>
  ),
  pin: (
    <>
      <path d="M10 17.5s5.5-4.6 5.5-9A5.5 5.5 0 0 0 4.500 8.500c0 4.400 5.500 9 5.500 9Z" />
      <circle cx="10" cy="8.500" r="2" />
    </>
  ),
  file: (
    <>
      <path d="M5.500 2.500h6l3.500 3.500v11.500h-9.500z" />
      <path d="M11.500 2.500v3.500h3.500" />
    </>
  ),
} as const;

export type IconName = keyof typeof paths | "whatsapp";

export default function Icon({
  name,
  className = "h-5 w-5",
  ...rest
}: { name: IconName } & SVGProps<SVGSVGElement>) {
  if (name === "whatsapp") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className} {...rest}>
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.300A10 10 0 1 0 12 2Zm0 1.800a8.200 8.200 0 1 1-4.300 15.200l-.300-.200-2.900.800.800-2.800-.200-.300A8.200 8.200 0 0 1 12 3.800Zm-3.300 3.900c-.200 0-.500 0-.700.300-.300.300-1 .900-1 2.300s1 2.700 1.200 2.900c.100.200 2 3.100 4.900 4.300 2.400 1 2.900.800 3.400.700.500 0 1.700-.700 1.900-1.300.200-.700.200-1.200.200-1.300-.100-.200-.300-.200-.600-.400l-1.900-.900c-.300-.100-.500-.200-.700.100l-.900 1.100c-.100.200-.300.200-.600.100-.300-.200-1.200-.500-2.300-1.400-.800-.800-1.400-1.700-1.600-2-.200-.300 0-.400.100-.600l.400-.500.300-.500v-.500l-.900-2.100c-.200-.500-.400-.500-.600-.500Z" />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
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
