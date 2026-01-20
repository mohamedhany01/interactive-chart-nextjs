'use client';

import { useState, useRef, useEffect } from 'react';
import {
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Label,
    ReferenceArea,
} from 'recharts';
import { Certification } from '@/types/certification';
import { CustomCertNode } from './CustomCertNode';
import { CertificationDetailModal } from './CertificationDetailModal';
import { Maximize2, Minimize2 } from 'lucide-react';
import { Button } from './ui/button';

interface CertificationChartProps {
    data: Certification[];
}

export function CertificationChart({ data }: CertificationChartProps) {
    const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const chartContainerRef = useRef<HTMLDivElement>(null);

    const handleNodeClick = (cert: Certification) => {
        setSelectedCert(cert);
        setIsModalOpen(true);
    };

    const toggleFullScreen = async () => {
        if (!chartContainerRef.current) return;

        try {
            if (!document.fullscreenElement) {
                // Enter fullscreen
                await chartContainerRef.current.requestFullscreen();
                setIsFullScreen(true);
            } else {
                // Exit fullscreen
                await document.exitFullscreen();
                setIsFullScreen(false);
            }
        } catch (error) {
            console.error('Error toggling fullscreen:', error);
        }
    };

    // Listen for fullscreen changes (e.g., user pressing ESC)
    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullScreen(!!document.fullscreenElement);
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);

        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
        };
    }, []);

    return (
        <>
            <div
                ref={chartContainerRef}
                className={`relative ${isFullScreen ? 'h-screen w-screen bg-background p-8' : ''}`}
            >
                {/* Full Screen Toggle */}
                <div className="absolute top-4 right-4 z-10">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={toggleFullScreen}
                        aria-label={isFullScreen ? 'Exit full screen' : 'Enter full screen'}
                    >
                        {isFullScreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                    </Button>
                </div>

                {/* Chart wrapper with explicit height for fullscreen */}
                <div
                    className={isFullScreen ? 'h-[calc(100vh-4rem)] w-full' : ''}
                    style={!isFullScreen ? { height: 600 } : undefined}
                >
                    <ResponsiveContainer width="100%" height="100%">
                        <ScatterChart
                            margin={{ top: 20, right: 20, bottom: 60, left: 60 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />

                            {/* Quadrant Backgrounds */}
                            {/* Bottom-Left: Niche Players (low market, low satisfaction) */}
                            <ReferenceArea
                                x1={0}
                                x2={0.5}
                                y1={1}
                                y2={3}
                                fill="hsl(var(--muted))"
                                fillOpacity={0.1}
                                label={{ value: 'Niche Players', position: 'bottom', className: 'fill-muted-foreground text-xs' }}
                            />

                            {/* Top-Left: Challengers (low market, high satisfaction) */}
                            <ReferenceArea
                                x1={0}
                                x2={0.5}
                                y1={3}
                                y2={5}
                                fill="hsl(var(--muted))"
                                fillOpacity={0.15}
                                label={{ value: 'Challengers', position: 'top', className: 'fill-muted-foreground text-xs font-medium' }}
                            />

                            {/* Bottom-Right: Contenders (high market, low satisfaction) */}
                            <ReferenceArea
                                x1={0.5}
                                x2={1}
                                y1={1}
                                y2={3}
                                fill="hsl(var(--muted))"
                                fillOpacity={0.15}
                                label={{ value: 'Contenders', position: 'bottom', className: 'fill-muted-foreground text-xs' }}
                            />

                            {/* Top-Right: Leaders (high market, high satisfaction) */}
                            <ReferenceArea
                                x1={0.5}
                                x2={1}
                                y1={3}
                                y2={5}
                                fill="hsl(var(--primary))"
                                fillOpacity={0.05}
                                label={{ value: 'Leaders', position: 'top', className: 'fill-primary text-xs font-semibold' }}
                            />

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
                                shape={<CustomCertNode onClick={handleNodeClick} />}
                            />
                        </ScatterChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Detail Modal */}
            <CertificationDetailModal
                certification={selectedCert}
                open={isModalOpen}
                onOpenChange={setIsModalOpen}
            />
        </>
    );
}
