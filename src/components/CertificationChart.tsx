'use client';

import {
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Label,
} from 'recharts';
import { Certification } from '@/types/certification';

interface CertificationChartProps {
    data: Certification[];
}

export function CertificationChart({ data }: CertificationChartProps) {
    return (
        <ResponsiveContainer width="100%" height={600}>
            <ScatterChart
                margin={{ top: 20, right: 20, bottom: 60, left: 60 }}
            >
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />

                {/* X-Axis: Market Presence */}
                <XAxis
                    type="number"
                    dataKey="market_presence"
                    name="Market Presence"
                    domain={[0, 1]}
                    ticks={[0, 0.25, 0.5, 0.75, 1]}
                    tickFormatter={(value) => `${(value * 100).toFixed(0)}%`}
                    className="text-xs"
                >
                    <Label
                        value="Market Presence"
                        position="bottom"
                        offset={40}
                        className="fill-foreground text-sm font-medium"
                    />
                </XAxis>

                {/* Y-Axis: Satisfaction */}
                <YAxis
                    type="number"
                    dataKey="satisfaction"
                    name="Satisfaction"
                    domain={[1, 5]}
                    ticks={[1, 2, 3, 4, 5]}
                    tickFormatter={(value) => value.toFixed(1)}
                    className="text-xs"
                >
                    <Label
                        value="Satisfaction Score"
                        angle={-90}
                        position="left"
                        offset={40}
                        className="fill-foreground text-sm font-medium"
                    />
                </YAxis>

                <Tooltip
                    cursor={{ strokeDasharray: '3 3' }}
                    content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                            const cert = payload[0].payload as Certification;
                            return (
                                <div className="rounded-lg border bg-background p-3 shadow-lg">
                                    <p className="font-semibold">{cert.title}</p>
                                    <p className="text-sm text-muted-foreground">{cert.abbreviation}</p>
                                    <div className="mt-2 space-y-1 text-xs">
                                        <p>Market Presence: {(cert.market_presence * 100).toFixed(1)}%</p>
                                        <p>Satisfaction: {cert.satisfaction.toFixed(1)}/5.0</p>
                                        <p>Votes: {cert.total_votes.toLocaleString()}</p>
                                    </div>
                                </div>
                            );
                        }
                        return null;
                    }}
                />

                <Scatter
                    name="Certifications"
                    data={data}
                    fill="hsl(var(--primary))"
                />
            </ScatterChart>
        </ResponsiveContainer>
    );
}
