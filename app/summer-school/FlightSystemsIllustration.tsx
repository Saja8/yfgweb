const wingHinge = { x: 13, y: -24 };
const controlHorn = { x: 25, y: 14 };
const pushrodLength = 51;
const wingBeatSteps = 12;

const wingBeat = Array.from({ length: wingBeatSteps + 1 }, (_, step) => {
  const progress = step / wingBeatSteps;
  const angle = Math.sin(progress * 2 * Math.PI) * (Math.PI / 7);
  // Project the hinge rotation into the slightly oblique blueprint view.
  const span = Math.cos(angle);
  const lift = 0.48 * Math.sin(angle);
  const hornX = wingHinge.x + controlHorn.x * span;
  const hornY = wingHinge.y + controlHorn.y + controlHorn.x * lift;
  // The sliding yoke stays on the centerline, a fixed rod length from each horn.
  const yokeY = hornY + Math.sqrt(pushrodLength ** 2 - hornX ** 2);
  const rodAngle = Math.atan2(hornY - yokeY, hornX) * (180 / Math.PI);

  return {
    at: (progress * 100).toFixed(2),
    span: span.toFixed(4),
    lift: lift.toFixed(4),
    yokeY: yokeY.toFixed(3),
    rodAngle: rodAngle.toFixed(3),
  };
});

const [neutral] = wingBeat;

const flightStyles = `
  @media (prefers-reduced-motion: no-preference) {
    .flight-ornithopter {
      --flight-wing-beat: 2.6s;
      animation: flight-bank 8s ease-in-out infinite alternate;
    }

    .flight-wing {
      animation: flight-flap var(--flight-wing-beat) linear infinite;
    }

    .flight-yoke {
      animation: flight-drive var(--flight-wing-beat) linear infinite;
    }

    .flight-pushrod {
      animation: flight-pushrod var(--flight-wing-beat) linear infinite;
    }

    .flight-quadrotor {
      animation: flight-patrol 28s ease-in-out infinite;
    }

    .flight-rotor {
      animation: flight-spin 1.45s linear infinite;
    }

    .flight-rotor-reverse {
      animation-direction: reverse;
    }
  }

  @keyframes flight-bank {
    from { transform: translate(311px, 341px) rotate(17deg) scale(.74); }
    to { transform: translate(358px, 304px) rotate(27deg) scale(.74); }
  }

  @keyframes flight-flap {
    ${wingBeat
      .map(
        ({ at, span, lift }) =>
          `${at}% { transform: matrix(${span}, ${lift}, 0, 1, 0, 0); }`
      )
      .join('\n    ')}
  }

  @keyframes flight-drive {
    ${wingBeat
      .map(({ at, yokeY }) => `${at}% { transform: translateY(${yokeY}px); }`)
      .join('\n    ')}
  }

  @keyframes flight-pushrod {
    ${wingBeat
      .map(
        ({ at, rodAngle }) => `${at}% { transform: rotate(${rodAngle}deg); }`
      )
      .join('\n    ')}
  }

  @keyframes flight-patrol {
    0%, 100% { transform: translate(619px, 226px) rotate(8deg) scale(.9); }
    16% { transform: translate(561px, 130px) rotate(-11deg) scale(.9); }
    37% { transform: translate(230px, 128px) rotate(-13deg) scale(.9); }
    55% { transform: translate(381px, 149px) rotate(10deg) scale(.9); }
    74% { transform: translate(600px, 273px) rotate(15deg) scale(.9); }
    88% { transform: translate(635px, 397px) rotate(-8deg) scale(.9); }
  }

  @keyframes flight-spin {
    to { transform: rotate(360deg); }
  }
`;

const rotors = [
  { x: 52, y: 37, reverse: false },
  { x: 128, y: 37, reverse: true },
  { x: 52, y: 103, reverse: true },
  { x: 128, y: 103, reverse: false },
];

function FlappingWing() {
  return (
    <g className="flight-wing">
      <path
        d="M0 0C52-43 121-58 184-47Q220-42 240-16Q217-14 198-3Q215-4 229 4Q204 12 180 15Q196 17 207 24Q178 33 153 32Q170 40 176 46Q147 53 119 46Q129 54 131 62C92 58 51 35 0 27Z"
        fill="url(#ornithopter-wing)"
        stroke="#b9eeff"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M4 12Q82-38 193-37M45 0Q101 13 131 62M88-17Q133 1 176 46M128-27Q169-13 207 24M164-35Q198-27 229 4"
        fill="none"
        stroke="#b9eeff"
        strokeOpacity=".58"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d={`M0 0L${controlHorn.x} ${controlHorn.y}`}
        stroke="#84c4d9"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </g>
  );
}

export default function FlightSystemsIllustration() {
  return (
    <svg
      role="img"
      aria-label="Flapping-wing aircraft and quadrotor sharing a blueprint grid"
      focusable="false"
      className="absolute inset-0 h-full w-full"
    >
      <style>{flightStyles}</style>
      <defs>
        <linearGradient id="ornithopter-wing" x2="0" y2="1">
          <stop stopColor="#60b5c9" />
          <stop offset="1" stopColor="#21485f" />
        </linearGradient>
        <linearGradient id="aeromodelling-sky" x2="1" y2="1">
          <stop stopColor="#163950" />
          <stop offset="1" stopColor="#081b2b" />
        </linearGradient>
        <pattern
          id="aeromodelling-grid"
          width="28"
          height="28"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M28 0H0v28"
            fill="none"
            stroke="#95d2ec"
            strokeOpacity=".18"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#aeromodelling-sky)" />
      <rect width="100%" height="100%" fill="url(#aeromodelling-grid)" />
      <svg width="100%" height="100%" viewBox="80 55 640 450">
        <g fill="none" stroke="#7dd3fc" strokeOpacity=".38">
          <circle cx="400" cy="270" r="194" />
          <circle cx="400" cy="270" r="150" strokeDasharray="5 8" />
          <path d="M400 60v420M138 270h524" strokeDasharray="5 8" />
          <path
            d="M94 359c105-8 200-34 287-82s164-117 222-204M109 404c112-12 210-45 294-95s171-125 233-219"
            strokeWidth="2"
          />
        </g>
        <g
          className="flight-ornithopter"
          transform="translate(334 322) rotate(22) scale(.74)"
        >
          <g transform={`translate(${wingHinge.x} ${wingHinge.y})`}>
            <FlappingWing />
          </g>
          <g
            transform={`translate(${-wingHinge.x} ${wingHinge.y}) scale(-1 1)`}
          >
            <FlappingWing />
          </g>
          <path
            d="M-7 59-54 109Q-29 119 0 111Q29 119 54 109L7 59Z"
            fill="#499bb5"
            stroke="#b9eeff"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path
            d="M0 75-27 111M0 75l27 36"
            fill="none"
            stroke="#b9eeff"
            strokeOpacity=".6"
            strokeWidth="2"
          />
          <path
            d="M0-83Q16-77 16-59L19-18Q18 17 7 51L3 90H-3L-7 51Q-18 17-19-18L-16-59Q-16-77 0-83Z"
            fill="#123d52"
            stroke="#d9f5ff"
            strokeWidth="3"
          />
          <path
            d="M0-68V72M-12-18h24"
            fill="none"
            stroke="#7ccbe4"
            strokeWidth="2"
          />
          <rect
            x="-5"
            y="14"
            width="10"
            height="21"
            rx="5"
            fill="#0b2235"
            stroke="#7ccbe4"
            strokeWidth="1.5"
          />
          <g
            className="flight-yoke"
            transform={`translate(0 ${neutral.yokeY})`}
          >
            {[1, -1].map((side) => (
              <g key={side} transform={`scale(${side} 1)`}>
                <g
                  className="flight-pushrod"
                  transform={`rotate(${neutral.rodAngle})`}
                >
                  <path
                    d={`M0 0H${pushrodLength}`}
                    stroke="#d4f9ff"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <circle
                    cx={pushrodLength}
                    r="3"
                    fill="#a9e4f0"
                    stroke="#24566b"
                    strokeWidth="1.5"
                  />
                </g>
              </g>
            ))}
            <circle r="4" fill="#a9e4f0" stroke="#24566b" strokeWidth="1.5" />
          </g>
          <g fill="#d4f9ff" stroke="#24566b" strokeWidth="2">
            <circle cx={-wingHinge.x} cy={wingHinge.y} r="5" />
            <circle cx={wingHinge.x} cy={wingHinge.y} r="5" />
          </g>
        </g>
        <g fill="#c4ecff">
          <circle cx="143" cy="135" r="3" />
          <circle cx="647" cy="384" r="3" />
          <circle cx="400" cy="76" r="3" />
          <circle cx="400" cy="464" r="3" />
        </g>

        <g
          className="flight-quadrotor"
          transform="translate(581 150) scale(.9)"
        >
          <g transform="translate(-90 -70)">
            <path
              d="M52 37l76 66m0-66-76 66"
              fill="none"
              stroke="#7dd3fc"
              strokeWidth="7"
            />
            <rect
              x="75"
              y="51"
              width="30"
              height="38"
              rx="8"
              fill="#19465e"
              stroke="#b9edff"
              strokeWidth="2"
            />
            <path
              d="m84 65 6-6 6 6"
              fill="none"
              stroke="#6ee7ce"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {rotors.map(({ x, y, reverse }) => (
              <g key={`${x}-${y}`} transform={`translate(${x} ${y})`}>
                <circle r="20" fill="#10283b" stroke="#679db8" />
                <g
                  className={
                    reverse
                      ? 'flight-rotor flight-rotor-reverse'
                      : 'flight-rotor'
                  }
                >
                  <path
                    d="M-16 3c0-6 8-7 16-3 7 4 15 3 16-3 0 6-8 7-16 3-7-4-15-3-16 3Z"
                    fill="#8ad6ed"
                    stroke="#8ad6ed"
                    strokeWidth="2"
                  />
                </g>
                <circle r="4" fill="#dffcf5" />
              </g>
            ))}
          </g>
        </g>
      </svg>
    </svg>
  );
}
