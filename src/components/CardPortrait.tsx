function PlayingCard({
  x,
  y,
  rotate,
  w = 150,
  h = 212,
}: {
  x: number;
  y: number;
  rotate: number;
  w?: number;
  h?: number;
}) {
  return (
    <g transform={`rotate(${rotate} ${x + w / 2} ${y + h / 2})`}>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={10}
        fill="#F2F2F0"
        stroke="#080808"
        strokeWidth={2}
      />
      <line
        x1={x + 20}
        y1={y + 28}
        x2={x + w - 20}
        y2={y + 28}
        stroke="#080808"
        strokeWidth={1.5}
        opacity={0.5}
      />
      <circle
        cx={x + w / 2}
        cy={y + h / 2 + 6}
        r={22}
        fill="none"
        stroke="#080808"
        strokeWidth={2}
        opacity={0.8}
      />
      <line
        x1={x + w / 2 - 22}
        y1={y + h / 2 + 6}
        x2={x + w / 2 + 22}
        y2={y + h / 2 + 6}
        stroke="#080808"
        strokeWidth={2}
        opacity={0.8}
      />
      <line
        x1={x + 20}
        y1={y + h - 26}
        x2={x + w - 20}
        y2={y + h - 26}
        stroke="#080808"
        strokeWidth={1.5}
        opacity={0.5}
      />
    </g>
  );
}

export function CardPortrait({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1000 1250"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Silhouette éditoriale entourée de cartes BIAIS."
    >
      <defs>
        <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c9c9c7" />
          <stop offset="55%" stopColor="#e6e6e4" />
          <stop offset="100%" stopColor="#b8b8b6" />
        </linearGradient>
        <radialGradient id="vignette" cx="50%" cy="38%" r="75%">
          <stop offset="60%" stopColor="#000000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.28" />
        </radialGradient>
      </defs>

      <rect width="1000" height="1250" fill="url(#bgGrad)" />

      {/* scattered cards behind */}
      <PlayingCard x={70} y={640} rotate={-22} />
      <PlayingCard x={760} y={590} rotate={16} />
      <PlayingCard x={120} y={300} rotate={10} w={120} h={170} />

      {/* silhouette */}
      <path
        d="M500 160
           c 70 0 118 58 118 128
           c 0 46 -18 78 -40 100
           c 86 30 168 96 192 230
           l 46 420
           c 2 20 -14 38 -34 38
           H 218
           c -20 0 -36 -18 -34 -38
           l 46 -420
           c 24 -134 106 -200 192 -230
           c -22 -22 -40 -54 -40 -100
           c 0 -70 48 -128 110 -128 Z"
        fill="#0d0d0d"
      />

      {/* eye band / mask */}
      <rect
        x="372"
        y="252"
        width="256"
        height="46"
        rx="6"
        fill="#F2F2F0"
      />

      {/* fanned foreground cards near chest / hands */}
      <PlayingCard x={330} y={560} rotate={-16} />
      <PlayingCard x={470} y={520} rotate={-2} />
      <PlayingCard x={600} y={560} rotate={14} />

      <rect width="1000" height="1250" fill="url(#vignette)" />
    </svg>
  );
}
