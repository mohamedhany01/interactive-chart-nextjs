'use client';

import { CertificationChart } from '@/components/CertificationChart';
import { CertificationFilters } from '@/components/CertificationFilters';
import { useChartFilters } from '@/hooks/useChartFilters';
import { mockCertifications } from '@/data/mock-certifications';

export default function Home() {
    const {
        selectedType,
        selectedLevels,
        searchQuery,
        filteredCertifications,
        setSelectedType,
        toggleSkillLevel,
        setSearchQuery,
        clearFilters,
    } = useChartFilters(mockCertifications);

    return (
        <main className="min-h-screen bg-background p-4 md:p-8">
            <div className="max-w-7xl mx-auto space-y-6">
                {/* Header */}
                <header className="space-y-2">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Cybersecurity Certification Roadmap
                    </h1>
                    <p className="text-muted-foreground text-sm md:text-base">
                        Explore and compare cybersecurity certifications by market presence and satisfaction
                    </p>
                </header>

                {/* Filters */}
                <div className="rounded-lg border bg-card p-4">
                    <CertificationFilters
                        selectedType={selectedType}
                        selectedLevels={selectedLevels}
                        searchQuery={searchQuery}
                        onTypeChange={setSelectedType}
                        onLevelToggle={toggleSkillLevel}
                        onSearchChange={setSearchQuery}
                        onClearFilters={clearFilters}
                    />
                </div>

                {/* Results Count */}
                <div className="text-sm text-muted-foreground">
                    Showing {filteredCertifications.length} of {mockCertifications.length} certifications
                </div>

                {/* Chart */}
                <div className="rounded-lg border bg-card p-6">
                    <CertificationChart data={filteredCertifications} />
                </div>
            </div>
        </main>
    );
}
