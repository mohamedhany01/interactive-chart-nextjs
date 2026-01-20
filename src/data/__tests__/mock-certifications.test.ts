import { mockCertifications } from '../mock-certifications';
import { validateCertifications, CertType } from '@/types/certification';

describe('Mock Certifications Data Integrity', () => {
    describe('Data Validation', () => {
        it('should have at least 15 certifications', () => {
            expect(mockCertifications.length).toBeGreaterThanOrEqual(15);
        });

        it('should validate all certifications against schema', () => {
            expect(() => validateCertifications(mockCertifications)).not.toThrow();
        });
    });

    describe('ID Uniqueness', () => {
        it('should have unique IDs for all certifications', () => {
            const ids = mockCertifications.map(cert => cert.id);
            const uniqueIds = new Set(ids);
            expect(uniqueIds.size).toBe(mockCertifications.length);
        });

        it('should have unique slugs for all certifications', () => {
            const slugs = mockCertifications.map(cert => cert.slug);
            const uniqueSlugs = new Set(slugs);
            expect(uniqueSlugs.size).toBe(mockCertifications.length);
        });
    });

    describe('Cert Type Validation', () => {
        it('should only contain valid cert_type values', () => {
            const validTypes: CertType[] = ['blue', 'red', 'infoSec'];
            mockCertifications.forEach(cert => {
                expect(validTypes).toContain(cert.cert_type);
            });
        });

        it('should have certifications of all three types', () => {
            const types = new Set(mockCertifications.map(cert => cert.cert_type));
            expect(types.has('blue')).toBe(true);
            expect(types.has('red')).toBe(true);
            expect(types.has('infoSec')).toBe(true);
        });

        it('should have at least 3 Blue Team certifications', () => {
            const blueTeam = mockCertifications.filter(cert => cert.cert_type === 'blue');
            expect(blueTeam.length).toBeGreaterThanOrEqual(3);
        });

        it('should have at least 3 Red Team certifications', () => {
            const redTeam = mockCertifications.filter(cert => cert.cert_type === 'red');
            expect(redTeam.length).toBeGreaterThanOrEqual(3);
        });

        it('should have at least 3 InfoSec certifications', () => {
            const infoSec = mockCertifications.filter(cert => cert.cert_type === 'infoSec');
            expect(infoSec.length).toBeGreaterThanOrEqual(3);
        });
    });

    describe('Satisfaction Range Validation', () => {
        it('should have satisfaction between 1.0 and 5.0 for all certifications', () => {
            mockCertifications.forEach(cert => {
                expect(cert.satisfaction).toBeGreaterThanOrEqual(1.0);
                expect(cert.satisfaction).toBeLessThanOrEqual(5.0);
            });
        });
    });

    describe('Market Presence Range Validation', () => {
        it('should have market_presence between 0.0 and 1.0 for all certifications', () => {
            mockCertifications.forEach(cert => {
                expect(cert.market_presence).toBeGreaterThanOrEqual(0.0);
                expect(cert.market_presence).toBeLessThanOrEqual(1.0);
            });
        });
    });

    describe('Quality Range Validation', () => {
        it('should have quality between 1.0 and 5.0 for all certifications', () => {
            mockCertifications.forEach(cert => {
                expect(cert.quality).toBeGreaterThanOrEqual(1.0);
                expect(cert.quality).toBeLessThanOrEqual(5.0);
            });
        });
    });

    describe('Cost Effectiveness Range Validation', () => {
        it('should have cost_effectiveness between 1.0 and 5.0 for all certifications', () => {
            mockCertifications.forEach(cert => {
                expect(cert.cost_effectiveness).toBeGreaterThanOrEqual(1.0);
                expect(cert.cost_effectiveness).toBeLessThanOrEqual(5.0);
            });
        });
    });

    describe('Required Fields Validation', () => {
        it('should have non-empty title for all certifications', () => {
            mockCertifications.forEach(cert => {
                expect(cert.title).toBeTruthy();
                expect(cert.title.length).toBeGreaterThan(0);
            });
        });

        it('should have non-empty abbreviation for all certifications', () => {
            mockCertifications.forEach(cert => {
                expect(cert.abbreviation).toBeTruthy();
                expect(cert.abbreviation.length).toBeGreaterThan(0);
            });
        });

        it('should have non-empty description for all certifications', () => {
            mockCertifications.forEach(cert => {
                expect(cert.description).toBeTruthy();
                expect(cert.description.length).toBeGreaterThan(0);
            });
        });

        it('should have valid URL for all certifications', () => {
            mockCertifications.forEach(cert => {
                expect(cert.url).toMatch(/^https?:\/\/.+/);
            });
        });
    });

    describe('Numeric Fields Validation', () => {
        it('should have non-negative total_votes for all certifications', () => {
            mockCertifications.forEach(cert => {
                expect(cert.total_votes).toBeGreaterThanOrEqual(0);
                expect(Number.isInteger(cert.total_votes)).toBe(true);
            });
        });

        it('should have non-negative number_of_attempts for all certifications', () => {
            mockCertifications.forEach(cert => {
                expect(cert.number_of_attempts).toBeGreaterThanOrEqual(0);
                expect(Number.isInteger(cert.number_of_attempts)).toBe(true);
            });
        });
    });

    describe('Nested Objects Validation', () => {
        it('should have valid requirements_data structure', () => {
            mockCertifications.forEach(cert => {
                expect(cert.requirements_data).toBeDefined();
                expect(cert.requirements_data.knowledge).toBeTruthy();
                expect(cert.requirements_data.work_experience).toBeTruthy();
                expect(cert.requirements_data.prior_courses_and_certifications).toBeTruthy();
            });
        });

        it('should have valid exam_details_data structure', () => {
            mockCertifications.forEach(cert => {
                expect(cert.exam_details_data).toBeDefined();
                expect(cert.exam_details_data.format).toBeTruthy();
                expect(typeof cert.exam_details_data.report_required).toBe('boolean');
            });
        });

        it('should have provider data for all certifications', () => {
            mockCertifications.forEach(cert => {
                if (cert.provider) {
                    expect(cert.provider.name).toBeTruthy();
                    expect(cert.provider.url).toMatch(/^https?:\/\/.+/);
                }
            });
        });
    });

    describe('Array Fields Validation', () => {
        it('should have at least one job role for each certification', () => {
            mockCertifications.forEach(cert => {
                expect(Array.isArray(cert.job_roles_titles)).toBe(true);
                expect(cert.job_roles_titles.length).toBeGreaterThan(0);
            });
        });

        it('should have at least one domain covered for each certification', () => {
            mockCertifications.forEach(cert => {
                expect(Array.isArray(cert.domains_covered_titles)).toBe(true);
                expect(cert.domains_covered_titles.length).toBeGreaterThan(0);
            });
        });
    });

    describe('Data Distribution', () => {
        it('should have varied skill levels', () => {
            const skillLevels = new Set(mockCertifications.map(cert => cert.skill_level));
            expect(skillLevels.size).toBeGreaterThan(1);
        });

        it('should have varied market presence values', () => {
            const marketPresenceValues = mockCertifications.map(cert => cert.market_presence);
            const uniqueValues = new Set(marketPresenceValues);
            expect(uniqueValues.size).toBeGreaterThan(5);
        });

        it('should have varied satisfaction scores', () => {
            const satisfactionScores = mockCertifications.map(cert => cert.satisfaction);
            const uniqueScores = new Set(satisfactionScores);
            expect(uniqueScores.size).toBeGreaterThan(5);
        });
    });
});
