import type { CSSProperties } from 'react';

interface BlobProps {
  className?: string;
  style?: CSSProperties;
  color: string;
}

export default function Blob({ className, style, color }: BlobProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path
        fill={color}
        d="M48.7,-62.8C62.1,-52.8,71.6,-37.2,74.8,-20.6C78,-4,74.9,13.6,67,28.3C59.1,43,46.4,54.8,31.8,62.1C17.2,69.4,0.8,72.2,-15.8,69.4C-32.4,66.6,-49.2,58.2,-60.1,44.7C-71,31.2,-76,12.6,-73.8,-4.8C-71.7,-22.2,-62.4,-38.3,-49.2,-48.6C-36,-58.9,-18,-63.4,-0.4,-62.9C17.2,-62.4,35.3,-72.8,48.7,-62.8Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}
