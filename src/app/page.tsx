export default function Home() {
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

                {/* Action Bar - Filters will go here */}
                <div className="rounded-lg border bg-card p-4">
                    <div className="text-sm text-muted-foreground">
                        Filter controls will appear here
                    </div>
                </div>

                {/* Chart Container - Chart will go here */}
                <div className="rounded-lg border bg-card p-6 min-h-[600px] flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                        <p className="text-lg font-medium">Chart visualization coming soon</p>
                        <p className="text-sm mt-2">16 certifications ready to display</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
