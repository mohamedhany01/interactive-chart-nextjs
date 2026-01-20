import { renderHook, act } from '@testing-library/react';
import { useChartFilters } from '../useChartFilters';
import { Certification, CertType, SkillLevel } from '@/types/certification';

// Mock certifications for testing
const mockCertifications: Certification[] = [
    {
        id: 1,
        slug: 'cissp',
        title: 'CISSP',
        abbreviation: 'CISSP',
        description: 'Security certification',
        image: '',
        url: 'https://example.com',
        cost: '$749',
        training_included: false,
        number_of_attempts: 3,
        job_roles_titles: ['Security Architect'],
        cert_type: 'infoSec',
        total_votes: 100,
        market_presence: 0.9,
        cost_effectiveness: 4.5,
        skill_level: 'Advanced',
        quality: 4.7,
        satisfaction: 4.6,
        provider: { name: 'ISC2', url: 'https://isc2.org', image: '' },
        domains_covered_titles: ['Security'],
        requirements_data: { knowledge: '', work_experience: '', prior_courses_and_certifications: '' },
        exam_details_data: { format: 'Multiple choice', duration: '6 hours', report_required: false },
        valid_for: '3 years',
    },
    {
        id: 2,
        slug: 'security-plus',
        title: 'Security+',
        abbreviation: 'Security+',
        description: 'Entry-level security',
        image: '',
        url: 'https://example.com',
        cost: '$392',
        training_included: false,
        number_of_attempts: 1,
        job_roles_titles: ['Security Admin'],
        cert_type: 'blue',
        total_votes: 200,
        market_presence: 0.8,
        cost_effectiveness: 4.8,
        skill_level: 'Beginner',
        quality: 4.5,
        satisfaction: 4.7,
        provider: { name: 'CompTIA', url: 'https://comptia.org', image: '' },
        domains_covered_titles: ['Security'],
        requirements_data: { knowledge: '', work_experience: '', prior_courses_and_certifications: '' },
        exam_details_data: { format: 'Multiple choice', duration: '90 minutes', report_required: false },
        valid_for: '3 years',
    },
    {
        id: 3,
        slug: 'oscp',
        title: 'OSCP',
        abbreviation: 'OSCP',
        description: 'Penetration testing',
        image: '',
        url: 'https://example.com',
        cost: '$1649',
        training_included: true,
        number_of_attempts: 2,
        job_roles_titles: ['Penetration Tester'],
        cert_type: 'red',
        total_votes: 150,
        market_presence: 0.82,
        cost_effectiveness: 4.6,
        skill_level: 'Advanced',
        quality: 4.9,
        satisfaction: 4.8,
        provider: { name: 'Offensive Security', url: 'https://offsec.com', image: '' },
        domains_covered_titles: ['Pentesting'],
        requirements_data: { knowledge: '', work_experience: '', prior_courses_and_certifications: '' },
        exam_details_data: { format: 'Practical', duration: '24 hours', report_required: true },
        valid_for: 'Lifetime',
    },
];

describe('useChartFilters', () => {
    it('should initialize with default values', () => {
        const { result } = renderHook(() => useChartFilters(mockCertifications));

        expect(result.current.selectedType).toBe('all');
        expect(result.current.selectedLevels).toEqual([]);
        expect(result.current.searchQuery).toBe('');
        expect(result.current.filteredCertifications).toHaveLength(3);
    });

    describe('Type Filtering', () => {
        it('should filter by blue team type', () => {
            const { result } = renderHook(() => useChartFilters(mockCertifications));

            act(() => {
                result.current.setSelectedType('blue');
            });

            expect(result.current.selectedType).toBe('blue');
            expect(result.current.filteredCertifications).toHaveLength(1);
            expect(result.current.filteredCertifications[0].cert_type).toBe('blue');
        });

        it('should filter by red team type', () => {
            const { result } = renderHook(() => useChartFilters(mockCertifications));

            act(() => {
                result.current.setSelectedType('red');
            });

            expect(result.current.filteredCertifications).toHaveLength(1);
            expect(result.current.filteredCertifications[0].cert_type).toBe('red');
        });

        it('should filter by infoSec type', () => {
            const { result } = renderHook(() => useChartFilters(mockCertifications));

            act(() => {
                result.current.setSelectedType('infoSec');
            });

            expect(result.current.filteredCertifications).toHaveLength(1);
            expect(result.current.filteredCertifications[0].cert_type).toBe('infoSec');
        });

        it('should show all certifications when type is "all"', () => {
            const { result } = renderHook(() => useChartFilters(mockCertifications));

            act(() => {
                result.current.setSelectedType('red');
            });

            expect(result.current.filteredCertifications).toHaveLength(1);

            act(() => {
                result.current.setSelectedType('all');
            });

            expect(result.current.filteredCertifications).toHaveLength(3);
        });
    });

    describe('Skill Level Filtering', () => {
        it('should filter by single skill level', () => {
            const { result } = renderHook(() => useChartFilters(mockCertifications));

            act(() => {
                result.current.toggleSkillLevel('Advanced');
            });

            expect(result.current.selectedLevels).toContain('Advanced');
            expect(result.current.filteredCertifications).toHaveLength(2); // CISSP and OSCP
        });

        it('should filter by multiple skill levels', () => {
            const { result } = renderHook(() => useChartFilters(mockCertifications));

            act(() => {
                result.current.toggleSkillLevel('Advanced');
                result.current.toggleSkillLevel('Beginner');
            });

            expect(result.current.selectedLevels).toHaveLength(2);
            expect(result.current.filteredCertifications).toHaveLength(3); // All certs
        });

        it('should toggle skill level off when clicked again', () => {
            const { result } = renderHook(() => useChartFilters(mockCertifications));

            act(() => {
                result.current.toggleSkillLevel('Advanced');
            });

            expect(result.current.selectedLevels).toContain('Advanced');

            act(() => {
                result.current.toggleSkillLevel('Advanced');
            });

            expect(result.current.selectedLevels).not.toContain('Advanced');
            expect(result.current.filteredCertifications).toHaveLength(3);
        });
    });

    describe('Search Filtering', () => {
        it('should filter by title search', () => {
            const { result } = renderHook(() => useChartFilters(mockCertifications));

            act(() => {
                result.current.setSearchQuery('CISSP');
            });

            expect(result.current.filteredCertifications).toHaveLength(1);
            expect(result.current.filteredCertifications[0].title).toBe('CISSP');
        });

        it('should filter by abbreviation search', () => {
            const { result } = renderHook(() => useChartFilters(mockCertifications));

            act(() => {
                result.current.setSearchQuery('OSCP');
            });

            expect(result.current.filteredCertifications).toHaveLength(1);
            expect(result.current.filteredCertifications[0].abbreviation).toBe('OSCP');
        });

        it('should filter by description search', () => {
            const { result } = renderHook(() => useChartFilters(mockCertifications));

            act(() => {
                result.current.setSearchQuery('penetration');
            });

            expect(result.current.filteredCertifications).toHaveLength(1);
            expect(result.current.filteredCertifications[0].slug).toBe('oscp');
        });

        it('should be case-insensitive', () => {
            const { result } = renderHook(() => useChartFilters(mockCertifications));

            act(() => {
                result.current.setSearchQuery('security+');
            });

            expect(result.current.filteredCertifications).toHaveLength(1);
            expect(result.current.filteredCertifications[0].title).toBe('Security+');
        });
    });

    describe('Combined Filtering', () => {
        it('should apply type and skill level filters together', () => {
            const { result } = renderHook(() => useChartFilters(mockCertifications));

            act(() => {
                result.current.setSelectedType('infoSec');
                result.current.toggleSkillLevel('Advanced');
            });

            expect(result.current.filteredCertifications).toHaveLength(1);
            expect(result.current.filteredCertifications[0].slug).toBe('cissp');
        });

        it('should apply all three filters together', () => {
            const { result } = renderHook(() => useChartFilters(mockCertifications));

            act(() => {
                result.current.setSelectedType('red');
                result.current.toggleSkillLevel('Advanced');
                result.current.setSearchQuery('OSCP');
            });

            expect(result.current.filteredCertifications).toHaveLength(1);
            expect(result.current.filteredCertifications[0].slug).toBe('oscp');
        });

        it('should return empty array when no matches', () => {
            const { result } = renderHook(() => useChartFilters(mockCertifications));

            act(() => {
                result.current.setSelectedType('blue');
                result.current.setSearchQuery('OSCP');
            });

            expect(result.current.filteredCertifications).toHaveLength(0);
        });
    });

    describe('Clear Filters', () => {
        it('should reset all filters to default', () => {
            const { result } = renderHook(() => useChartFilters(mockCertifications));

            act(() => {
                result.current.setSelectedType('red');
                result.current.toggleSkillLevel('Advanced');
                result.current.setSearchQuery('test');
            });

            expect(result.current.selectedType).toBe('red');
            expect(result.current.selectedLevels).toHaveLength(1);
            expect(result.current.searchQuery).toBe('test');

            act(() => {
                result.current.clearFilters();
            });

            expect(result.current.selectedType).toBe('all');
            expect(result.current.selectedLevels).toEqual([]);
            expect(result.current.searchQuery).toBe('');
            expect(result.current.filteredCertifications).toHaveLength(3);
        });
    });
});
