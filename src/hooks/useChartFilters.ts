import { useState, useMemo } from 'react';
import { Certification, CertType, SkillLevel } from '@/types/certification';

export interface FilterState {
    selectedType: CertType | 'all';
    selectedLevels: SkillLevel[];
    searchQuery: string;
}

export function useChartFilters(certifications: Certification[]) {
    const [selectedType, setSelectedType] = useState<CertType | 'all'>('all');
    const [selectedLevels, setSelectedLevels] = useState<SkillLevel[]>([]);
    const [searchQuery, setSearchQuery] = useState('');

    // Filter certifications based on all criteria
    const filteredCertifications = useMemo(() => {
        return certifications.filter((cert) => {
            // Type filter
            const typeMatch = selectedType === 'all' || cert.cert_type === selectedType;

            // Skill level filter (if any levels selected, cert must match one of them)
            const levelMatch = selectedLevels.length === 0 || selectedLevels.includes(cert.skill_level);

            // Search filter (search in title, abbreviation, and description)
            const searchMatch =
                searchQuery === '' ||
                cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                cert.abbreviation.toLowerCase().includes(searchQuery.toLowerCase()) ||
                cert.description.toLowerCase().includes(searchQuery.toLowerCase());

            return typeMatch && levelMatch && searchMatch;
        });
    }, [certifications, selectedType, selectedLevels, searchQuery]);

    // Toggle skill level selection
    const toggleSkillLevel = (level: SkillLevel) => {
        setSelectedLevels((prev) =>
            prev.includes(level)
                ? prev.filter((l) => l !== level)
                : [...prev, level]
        );
    };

    // Clear all filters
    const clearFilters = () => {
        setSelectedType('all');
        setSelectedLevels([]);
        setSearchQuery('');
    };

    return {
        // State
        selectedType,
        selectedLevels,
        searchQuery,
        filteredCertifications,

        // Setters
        setSelectedType,
        setSelectedLevels,
        setSearchQuery,
        toggleSkillLevel,
        clearFilters,
    };
}
