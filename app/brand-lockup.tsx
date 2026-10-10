import Image from "next/image";

type BrandLockupProps = {
  priority?: boolean;
};

export default function BrandLockup({ priority = false }: BrandLockupProps) {
  return (
    <span className="cg-app-brand">
      <Image
        className="cg-app-brand-mark"
        src="/brand/chessgrind-king-knight-emblem.png"
        alt=""
        width={44}
        height={44}
        unoptimized
        priority={priority}
      />
      <span className="cg-app-brand-wordmark">
        <small>CHESS</small>
        <strong>GRIND</strong>
      </span>
    </span>
  );
}
