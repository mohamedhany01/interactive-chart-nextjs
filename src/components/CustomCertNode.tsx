import { CertType } from '@/types/certification';

interface CustomNodeProps {
    cx?: number;
    cy?: number;
    payload?: any;
    onClick?: (data: any) => void;
}

const CERT_TYPE_COLORS = {
    blue: 'hsl(217, 91%, 60%)', // Blue for Blue Team
    red: 'hsl(0, 84%, 60%)', // Red for Red Team
    infoSec: 'hsl(142, 71%, 45%)', // Green for InfoSec
};

export function CustomCertNode({ cx, cy, payload, onClick }: CustomNodeProps) {
    if (!cx || !cy || !payload) return null;

    const certType = payload.cert_type as CertType;
    const color = CERT_TYPE_COLORS[certType] || 'hsl(var(--primary))';

    return (
        <g>
            <circle
                cx={cx}
                cy={cy}
                r={8}
                fill={color}
                stroke="hsl(var(--background))"
                strokeWidth={2}
                className="cursor-pointer transition-all hover:r-10 hover:opacity-80"
                onClick={() => onClick?.(payload)}
            />
            <text
                x={cx}
                y={cy}
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-background text-[8px] font-bold pointer-events-none"
            >
                {payload.abbreviation?.substring(0, 3).toUpperCase()}
            </text>
        </g>
    );
}
