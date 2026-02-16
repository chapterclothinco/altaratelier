// Server Component - no 'use client' needed
// Elegant SVG line illustrations for Altar Atelier bridal garment types

export function getGarmentSVG(garmentType) {
  const shared = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 200 200",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  switch (garmentType) {
    // ── Robe / Kimono ───────────────────────────────────────────────
    case 'robe':
      return (
        <svg {...shared}>
          {/* Left lapel */}
          <path d="M88 38 L78 50 L72 90 L68 160 L68 172" />
          {/* Right lapel */}
          <path d="M112 38 L122 50 L128 90 L132 160 L132 172" />
          {/* Left lapel inner fold */}
          <path d="M88 38 L94 55 L90 90 L86 160 L82 172" />
          {/* Right lapel inner fold */}
          <path d="M112 38 L106 55 L110 90 L114 160 L118 172" />
          {/* Neckline */}
          <path d="M88 38 Q100 32 112 38" />
          {/* Left sleeve */}
          <path d="M78 50 L42 68 L38 90 L44 92 L56 78 L72 90" />
          {/* Right sleeve */}
          <path d="M122 50 L158 68 L162 90 L156 92 L144 78 L128 90" />
          {/* Hem - flowing curve */}
          <path d="M68 172 Q100 178 132 172" />
          {/* Tie belt */}
          <path d="M72 100 L128 100" />
          <path d="M96 100 Q88 112 82 120" />
          <path d="M104 100 Q96 114 92 118" />
          {/* Belt knot detail */}
          <ellipse cx="100" cy="100" rx="5" ry="3" />
        </svg>
      );

    // ── Jacket ──────────────────────────────────────────────────────
    case 'jacket':
      return (
        <svg {...shared}>
          {/* Collar */}
          <path d="M86 40 Q100 36 114 40" />
          {/* Left collar lapel */}
          <path d="M86 40 L80 52 L84 58" />
          {/* Right collar lapel */}
          <path d="M114 40 L120 52 L116 58" />
          {/* Left shoulder & sleeve */}
          <path d="M80 52 L52 60 L46 100 L50 102 L56 98 L62 80" />
          {/* Right shoulder & sleeve */}
          <path d="M120 52 L148 60 L154 100 L150 102 L144 98 L138 80" />
          {/* Left body */}
          <path d="M62 80 L64 76 L68 130 L68 152" />
          {/* Right body */}
          <path d="M138 80 L136 76 L132 130 L132 152" />
          {/* Center front */}
          <path d="M98 58 L96 152" />
          <path d="M102 58 L104 152" />
          {/* Hem */}
          <path d="M68 152 Q100 156 132 152" />
          {/* Waistband */}
          <path d="M68 130 Q100 134 132 130" />
          {/* Pocket details */}
          <path d="M76 108 L90 108 L90 126 L76 126" />
          <path d="M110 108 L124 108 L124 126 L110 126" />
        </svg>
      );

    // ── T-Shirt ─────────────────────────────────────────────────────
    case 't-shirt':
      return (
        <svg {...shared}>
          {/* Neckline - elegant scoop */}
          <path d="M82 48 Q100 56 118 48" />
          {/* Left shoulder */}
          <path d="M82 48 L68 52" />
          {/* Right shoulder */}
          <path d="M118 48 L132 52" />
          {/* Left sleeve */}
          <path d="M68 52 L50 72 L54 74 L66 66 L72 78" />
          {/* Right sleeve */}
          <path d="M132 52 L150 72 L146 74 L134 66 L128 78" />
          {/* Left body */}
          <path d="M72 78 L70 76 L68 156" />
          {/* Right body */}
          <path d="M128 78 L130 76 L132 156" />
          {/* Hem - gentle curve */}
          <path d="M68 156 Q100 162 132 156" />
          {/* Subtle center seam */}
          <path d="M100 56 L100 156" strokeDasharray="4 6" strokeWidth="0.75" />
        </svg>
      );

    // ── Hoodie ──────────────────────────────────────────────────────
    case 'hoodie':
      return (
        <svg {...shared}>
          {/* Hood */}
          <path d="M84 50 Q78 28 88 20 Q100 14 112 20 Q122 28 116 50" />
          {/* Hood inner line */}
          <path d="M84 50 Q92 42 100 40 Q108 42 116 50" />
          {/* Neckline */}
          <path d="M84 50 Q100 56 116 50" />
          {/* Left shoulder */}
          <path d="M84 50 L66 58" />
          {/* Right shoulder */}
          <path d="M116 50 L134 58" />
          {/* Left sleeve */}
          <path d="M66 58 L44 86 L48 90 L58 82 L68 82" />
          {/* Right sleeve */}
          <path d="M134 58 L156 86 L152 90 L142 82 L132 82" />
          {/* Left body */}
          <path d="M68 82 L66 78 L64 160" />
          {/* Right body */}
          <path d="M132 82 L134 78 L136 160" />
          {/* Hem with ribbing */}
          <path d="M64 160 Q100 166 136 160" />
          <path d="M64 156 Q100 162 136 156" strokeWidth="0.75" />
          {/* Kangaroo pocket */}
          <path d="M78 112 Q100 108 122 112 L122 134 Q100 138 78 134 Z" />
          {/* Drawstrings */}
          <path d="M94 56 L90 72" strokeWidth="1" />
          <path d="M106 56 L110 72" strokeWidth="1" />
        </svg>
      );

    // ── Pajama Set ──────────────────────────────────────────────────
    case 'pajama-set':
      return (
        <svg {...shared}>
          {/* ─── Top ─── */}
          {/* Neckline - delicate V */}
          <path d="M82 24 L100 34 L118 24" />
          {/* Shoulders */}
          <path d="M82 24 L68 28" />
          <path d="M118 24 L132 28" />
          {/* Left sleeve - short, capped */}
          <path d="M68 28 L58 42 L62 44 L70 38 L74 46" />
          {/* Right sleeve - short, capped */}
          <path d="M132 28 L142 42 L138 44 L130 38 L126 46" />
          {/* Left body */}
          <path d="M74 46 L72 44 L70 88" />
          {/* Right body */}
          <path d="M126 46 L128 44 L130 88" />
          {/* Top hem */}
          <path d="M70 88 Q100 92 130 88" />
          {/* Button detail */}
          <circle cx="100" cy="44" r="1.5" />
          <circle cx="100" cy="56" r="1.5" />
          <circle cx="100" cy="68" r="1.5" />
          <circle cx="100" cy="80" r="1.5" />

          {/* ─── Pants ─── */}
          {/* Waistband */}
          <path d="M70 98 Q100 96 130 98" />
          <path d="M70 102 Q100 100 130 102" />
          {/* Left leg */}
          <path d="M70 102 L66 176" />
          <path d="M98 102 L86 176" />
          {/* Right leg */}
          <path d="M102 102 L114 176" />
          <path d="M130 102 L134 176" />
          {/* Left hem */}
          <path d="M66 176 Q76 178 86 176" />
          {/* Right hem */}
          <path d="M114 176 Q124 178 134 176" />
          {/* Crotch seam */}
          <path d="M98 102 Q100 138 102 102" />
        </svg>
      );

    // ── Loungewear ──────────────────────────────────────────────────
    case 'loungewear':
      return (
        <svg {...shared}>
          {/* ─── Top - relaxed crew neck ─── */}
          {/* Neckline */}
          <path d="M84 24 Q100 30 116 24" />
          {/* Shoulders - dropped */}
          <path d="M84 24 L64 32" />
          <path d="M116 24 L136 32" />
          {/* Left sleeve - long, relaxed */}
          <path d="M64 32 L48 62 L52 64 L60 56 L66 60" />
          {/* Right sleeve - long, relaxed */}
          <path d="M136 32 L152 62 L148 64 L140 56 L134 60" />
          {/* Left body - oversized */}
          <path d="M66 60 L64 56 L62 86" />
          {/* Right body - oversized */}
          <path d="M134 60 L136 56 L138 86" />
          {/* Top hem - ribbed */}
          <path d="M62 86 Q100 90 138 86" />
          <path d="M62 82 Q100 86 138 82" strokeWidth="0.75" />

          {/* ─── Jogger pants ─── */}
          {/* Waistband with drawstring */}
          <path d="M66 96 Q100 94 134 96" />
          <path d="M66 100 Q100 98 134 100" />
          {/* Drawstring detail */}
          <path d="M96 96 L92 106" strokeWidth="1" />
          <path d="M104 96 L108 106" strokeWidth="1" />
          {/* Left leg - tapered */}
          <path d="M66 100 L72 168" />
          <path d="M98 100 L88 168" />
          {/* Right leg - tapered */}
          <path d="M102 100 L112 168" />
          <path d="M134 100 L128 168" />
          {/* Crotch */}
          <path d="M98 100 Q100 140 102 100" />
          {/* Cuffed hems */}
          <path d="M72 168 Q80 170 88 168" />
          <path d="M72 164 Q80 166 88 164" strokeWidth="0.75" />
          <path d="M112 168 Q120 170 128 168" />
          <path d="M112 164 Q120 166 128 164" strokeWidth="0.75" />
        </svg>
      );

    // ── Tank Top ────────────────────────────────────────────────────
    case 'tank-top':
      return (
        <svg {...shared}>
          {/* Left strap */}
          <path d="M82 36 L82 52" />
          {/* Right strap */}
          <path d="M118 36 L118 52" />
          {/* Neckline - elegant scallop */}
          <path d="M82 36 Q100 42 118 36" />
          {/* Left armhole curve */}
          <path d="M82 52 Q70 58 68 72 L68 76" />
          {/* Right armhole curve */}
          <path d="M118 52 Q130 58 132 72 L132 76" />
          {/* Back neckline hint */}
          <path d="M82 36 Q100 32 118 36" strokeDasharray="3 4" strokeWidth="0.75" />
          {/* Left body - gentle A-line */}
          <path d="M68 76 L66 160" />
          {/* Right body */}
          <path d="M132 76 L134 160" />
          {/* Hem */}
          <path d="M66 160 Q100 166 134 160" />
          {/* Subtle empire seam */}
          <path d="M68 96 Q100 100 132 96" strokeWidth="0.75" strokeDasharray="6 4" />
        </svg>
      );

    // ── Tote Bag ────────────────────────────────────────────────────
    case 'tote-bag':
      return (
        <svg {...shared}>
          {/* Left handle */}
          <path d="M76 68 Q76 36 88 36 L88 68" />
          {/* Right handle */}
          <path d="M112 68 Q112 36 124 36 L124 68" />
          {/* Bag body */}
          <path d="M60 68 L60 164 Q60 172 68 172 L132 172 Q140 172 140 164 L140 68" />
          {/* Top opening */}
          <path d="M60 68 L140 68" />
          {/* Monogram / decorative detail */}
          <text
            x="100"
            y="126"
            textAnchor="middle"
            fontSize="18"
            fontFamily="serif"
            stroke="currentColor"
            strokeWidth="0.75"
            fill="none"
            letterSpacing="2"
          >
            AA
          </text>
          {/* Subtle bottom gusset */}
          <path d="M68 164 L132 164" strokeWidth="0.75" strokeDasharray="4 4" />
        </svg>
      );

    // ── Accessory (Gift Box) ────────────────────────────────────────
    case 'accessory':
      return (
        <svg {...shared}>
          {/* Box body */}
          <rect x="56" y="88" width="88" height="72" rx="3" />
          {/* Lid */}
          <rect x="52" y="76" width="96" height="16" rx="3" />
          {/* Vertical ribbon */}
          <path d="M100 76 L100 160" />
          {/* Horizontal ribbon */}
          <path d="M52 84 L148 84" strokeWidth="0.75" />
          {/* Bow - left loop */}
          <path d="M100 76 Q82 54 78 48 Q76 44 80 42 Q84 40 88 44 Q92 50 100 64" />
          {/* Bow - right loop */}
          <path d="M100 76 Q118 54 122 48 Q124 44 120 42 Q116 40 112 44 Q108 50 100 64" />
          {/* Bow center knot */}
          <ellipse cx="100" cy="72" rx="5" ry="6" />
          {/* Ribbon tails */}
          <path d="M100 76 Q94 82 88 76" strokeWidth="1" />
          <path d="M100 76 Q106 82 112 76" strokeWidth="1" />
        </svg>
      );

    // ── Default (generic garment silhouette) ────────────────────────
    default:
      return (
        <svg {...shared}>
          {/* Simple dress / garment silhouette */}
          {/* Neckline */}
          <path d="M86 40 Q100 46 114 40" />
          {/* Shoulders */}
          <path d="M86 40 L72 46" />
          <path d="M114 40 L128 46" />
          {/* Left sleeve hint */}
          <path d="M72 46 L60 62 L64 64 L72 58 L76 66" />
          {/* Right sleeve hint */}
          <path d="M128 46 L140 62 L136 64 L128 58 L124 66" />
          {/* Left body - A-line */}
          <path d="M76 66 L74 62 L66 164" />
          {/* Right body - A-line */}
          <path d="M124 66 L126 62 L134 164" />
          {/* Hem */}
          <path d="M66 164 Q100 170 134 164" />
          {/* Waist detail */}
          <path d="M74 98 Q100 102 126 98" strokeWidth="0.75" />
        </svg>
      );
  }
}
