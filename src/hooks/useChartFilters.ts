import { useState, useMemo } from 'react';
import { Certification, CertType, SkillLevel } from '@/types/certification';
import { useDebounce } from './useDebounce';

/**
 * Custom hook for managing chart filters and filtering logic
 * @param certifications - Array of certifications to filter
 * @returns Filter state and handlers
 */
export function useChartFilters(certifications: Certification[]) {
    const [selectedType, setSelectedType] = useState<CertType | 'all'>('all');
    const [selectedLevels, setSelectedLevels] = useState<SkillLevel[]>([]);
    const [searchQuery, setSearchQuery] = useState('');

    // Debounce search query to reduce filtering operations while typing (300ms delay)
    const debouncedSearchQuery = useDebounce(searchQuery, 300);

    /**
     * Filter certifications based on selected filters
     */
    const filteredCertifications = useMemo(() => {
        return certifications.filter((cert) => {
            // Filter by certification type
            const typeMatch = selectedType === 'all' || cert.cert_type === selectedType;

            // Filter by skill level
            const levelMatch = selectedLevels.length === 0 || selectedLevels.includes(cert.skill_level);

            // Filter by search query (debounced to improve performance)
            const searchMatch =
                debouncedSearchQuery === '' ||
                cert.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
                cert.abbreviation.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
                cert.description.toLowerCase().includes(debouncedSearchQuery.toLowerCase());

            return typeMatch && levelMatch && searchMatch;
        });
    }, [certifications, selectedType, selectedLevels, debouncedSearchQuery]);

    /**
     * Toggle a skill level filter
     */
    const toggleSkillLevel = (level: SkillLevel) => {
        setSelectedLevels((prev) =>
            prev.includes(level)
                ? prev.filter((l) => l !== level)
                : [...prev, level]
        );
    };

    /**
     * Clear all filters
     */
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
