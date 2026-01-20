'use client';

import { Search } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { CertType, SkillLevel } from '@/types/certification';

interface CertificationFiltersProps {
    selectedType: CertType | 'all';
    selectedLevels: SkillLevel[];
    searchQuery: string;
    onTypeChange: (type: CertType | 'all') => void;
    onLevelToggle: (level: SkillLevel) => void;
    onSearchChange: (query: string) => void;
    onClearFilters: () => void;
}

const SKILL_LEVELS: SkillLevel[] = ['Novice', 'Beginner', 'Intermediate', 'Advanced', 'Expert'];

export function CertificationFilters({
    selectedType,
    selectedLevels,
    searchQuery,
    onTypeChange,
    onLevelToggle,
    onSearchChange,
    onClearFilters,
}: CertificationFiltersProps) {
    return (
        <div className="space-y-4">
            {/* Type Tabs */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <Tabs value={selectedType} onValueChange={(value) => onTypeChange(value as CertType | 'all')}>
                    <TabsList>
                        <TabsTrigger value="all">All</TabsTrigger>
                        <TabsTrigger value="blue">Blue Team</TabsTrigger>
                        <TabsTrigger value="red">Red Team</TabsTrigger>
                        <TabsTrigger value="infoSec">InfoSec</TabsTrigger>
                    </TabsList>
                </Tabs>

                <Button
                    variant="outline"
                    size="sm"
                    onClick={onClearFilters}
                    className="w-full sm:w-auto"
                >
                    Clear Filters
                </Button>
            </div>

            {/* Skill Level and Search */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Skill Level Multi-Select */}
                <div className="space-y-2">
                    <label className="text-sm font-medium">Skill Level</label>
                    <Select
                        value={selectedLevels.length > 0 ? selectedLevels[0] : undefined}
                        onValueChange={(value) => {
                            if (value === 'clear-all') {
                                // Clear all selected levels
                                selectedLevels.forEach(level => onLevelToggle(level));
                            } else {
                                onLevelToggle(value as SkillLevel);
                            }
                        }}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder={
                                selectedLevels.length > 0
                                    ? `${selectedLevels.length} level(s) selected`
                                    : 'Select skill levels'
                            } />
                        </SelectTrigger>
                        <SelectContent>
                            {selectedLevels.length > 0 && (
                                <>
                                    <SelectItem value="clear-all" className="text-destructive font-medium">
                                        Clear All
                                    </SelectItem>
                                    <div className="h-px bg-border my-1" />
                                </>
                            )}
                            {SKILL_LEVELS.map((level) => (
                                <SelectItem
                                    key={level}
                                    value={level}
                                    className={selectedLevels.includes(level) ? 'bg-accent' : ''}
                                >
                                    {level}
                                    {selectedLevels.includes(level) && ' ✓'}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    {selectedLevels.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                            {selectedLevels.map((level) => (
                                <span
                                    key={level}
                                    className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded-md bg-primary text-primary-foreground"
                                >
                                    {level}
                                    <button
                                        onClick={() => onLevelToggle(level)}
                                        className="hover:opacity-70"
                                        aria-label={`Remove ${level}`}
                                    >
                                        ×
                                    </button>
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                {/* Search Input */}
                <div className="space-y-2">
                    <label className="text-sm font-medium">Search</label>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="text"
                            placeholder="Search certifications..."
                            value={searchQuery}
                            onChange={(e) => onSearchChange(e.target.value)}
                            className="pl-9"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
