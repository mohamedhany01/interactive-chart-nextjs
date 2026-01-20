import {
    CertType,
    SkillLevel,
    CertificationSchema,
    validateCertification,
    safeParseCertification,
    type Certification,
} from '../certification';

describe('Certification Type Validation', () => {
    const validCertification: Certification = {
        id: 1,
        slug: 'cissp-test',
        title: 'Certified Information Systems Security Professional',
        abbreviation: 'CISSP',
        description: 'A globally recognized certification in information security',
        image: '/certs/cissp.png',
        url: 'https://www.isc2.org/Certifications/CISSP',
        cost: '$749 USD',
        training_included: false,
        number_of_attempts: 3,
        job_roles_titles: ['Security Architect', 'Security Consultant'],
        cert_type: 'infoSec' as CertType,
        total_votes: 1250,
        market_presence: 0.85,
        cost_effectiveness: 4.5,
        skill_level: 'Advanced' as SkillLevel,
        quality: 4.7,
        satisfaction: 4.5,
        provider: {
            name: '(ISC)²',
            url: 'https://www.isc2.org',
            image: '/providers/isc2.png'
        },
        domains_covered_titles: ['Security and Risk Management', 'Asset Security'],
        requirements_data: {
            knowledge: 'Understanding of 8 CISSP domains',
            work_experience: '5 years of cumulative paid work experience',
            prior_courses_and_certifications: 'None required'
        },
        exam_details_data: {
            format: 'Multiple choice and advanced innovative questions',
            duration: '6 hours',
            report_required: false
        },
        valid_for: '3 years'
    };

    describe('Valid Certification', () => {
        it('should validate a correct certification object', () => {
            expect(() => validateCertification(validCertification)).not.toThrow();
        });

        it('should parse successfully with safeParse', () => {
            const result = safeParseCertification(validCertification);
            expect(result.success).toBe(true);
            if (result.success) {
                expect(result.data).toEqual(validCertification);
            }
        });
    });

    describe('Market Presence Validation', () => {
        it('should accept market_presence of 0.0', () => {
            const cert = { ...validCertification, market_presence: 0.0 };
            expect(() => validateCertification(cert)).not.toThrow();
        });

        it('should accept market_presence of 1.0', () => {
            const cert = { ...validCertification, market_presence: 1.0 };
            expect(() => validateCertification(cert)).not.toThrow();
        });

        it('should accept market_presence of 0.5', () => {
            const cert = { ...validCertification, market_presence: 0.5 };
            expect(() => validateCertification(cert)).not.toThrow();
        });

        it('should reject market_presence below 0.0', () => {
            const cert = { ...validCertification, market_presence: -0.1 };
            const result = safeParseCertification(cert);
            expect(result.success).toBe(false);
        });

        it('should reject market_presence above 1.0', () => {
            const cert = { ...validCertification, market_presence: 1.1 };
            const result = safeParseCertification(cert);
            expect(result.success).toBe(false);
        });
    });

    describe('Satisfaction Validation', () => {
        it('should accept satisfaction of 1.0', () => {
            const cert = { ...validCertification, satisfaction: 1.0 };
            expect(() => validateCertification(cert)).not.toThrow();
        });

        it('should accept satisfaction of 5.0', () => {
            const cert = { ...validCertification, satisfaction: 5.0 };
            expect(() => validateCertification(cert)).not.toThrow();
        });

        it('should accept satisfaction of 3.5', () => {
            const cert = { ...validCertification, satisfaction: 3.5 };
            expect(() => validateCertification(cert)).not.toThrow();
        });

        it('should reject satisfaction below 1.0', () => {
            const cert = { ...validCertification, satisfaction: 0.9 };
            const result = safeParseCertification(cert);
            expect(result.success).toBe(false);
        });

        it('should reject satisfaction above 5.0', () => {
            const cert = { ...validCertification, satisfaction: 5.1 };
            const result = safeParseCertification(cert);
            expect(result.success).toBe(false);
        });
    });

    describe('CertType Validation', () => {
        it('should accept valid cert_type values', () => {
            const blueTeam = { ...validCertification, cert_type: 'blue' as CertType };
            const redTeam = { ...validCertification, cert_type: 'red' as CertType };
            const infoSec = { ...validCertification, cert_type: 'infoSec' as CertType };

            expect(() => validateCertification(blueTeam)).not.toThrow();
            expect(() => validateCertification(redTeam)).not.toThrow();
            expect(() => validateCertification(infoSec)).not.toThrow();
        });

        it('should reject invalid cert_type', () => {
            const cert = { ...validCertification, cert_type: 'Invalid Type' };
            const result = safeParseCertification(cert);
            expect(result.success).toBe(false);
        });
    });

    describe('SkillLevel Validation', () => {
        it('should accept valid skill_level values', () => {
            const novice = { ...validCertification, skill_level: 'Novice' as SkillLevel };
            const expert = { ...validCertification, skill_level: 'Expert' as SkillLevel };

            expect(() => validateCertification(novice)).not.toThrow();
            expect(() => validateCertification(expert)).not.toThrow();
        });

        it('should reject invalid skill_level', () => {
            const cert = { ...validCertification, skill_level: 'Master' };
            const result = safeParseCertification(cert);
            expect(result.success).toBe(false);
        });
    });

    describe('Required Fields Validation', () => {
        it('should reject empty slug', () => {
            const cert = { ...validCertification, slug: '' };
            const result = safeParseCertification(cert);
            expect(result.success).toBe(false);
        });

        it('should reject empty title', () => {
            const cert = { ...validCertification, title: '' };
            const result = safeParseCertification(cert);
            expect(result.success).toBe(false);
        });

        it('should reject negative total_votes', () => {
            const cert = { ...validCertification, total_votes: -1 };
            const result = safeParseCertification(cert);
            expect(result.success).toBe(false);
        });

        it('should reject non-integer total_votes', () => {
            const cert = { ...validCertification, total_votes: 10.5 };
            const result = safeParseCertification(cert);
            expect(result.success).toBe(false);
        });

        it('should reject missing required fields', () => {
            const cert = { id: 1, slug: 'test', title: 'Test' };
            const result = safeParseCertification(cert);
            expect(result.success).toBe(false);
        });
    });
});
