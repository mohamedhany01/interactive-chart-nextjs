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
        id: 'cert-001',
        title: 'Certified Information Systems Security Professional',
        abbreviation: 'CISSP',
        provider: '(ISC)²',
        cert_type: CertType.INFOSEC,
        skill_level: SkillLevel.ADVANCED,
        market_presence: 0.85,
        satisfaction: 4.5,
        total_votes: 1250,
        description: 'A globally recognized certification in information security',
        cost: '$749 USD',
        exam_details: '6 hours, 100-150 questions',
        requirements_data: '5 years of experience in 2+ domains',
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

    describe('Enum Validation', () => {
        it('should accept valid CertType', () => {
            const blueTeam = { ...validCertification, cert_type: CertType.BLUE_TEAM };
            const redTeam = { ...validCertification, cert_type: CertType.RED_TEAM };
            const infoSec = { ...validCertification, cert_type: CertType.INFOSEC };

            expect(() => validateCertification(blueTeam)).not.toThrow();
            expect(() => validateCertification(redTeam)).not.toThrow();
            expect(() => validateCertification(infoSec)).not.toThrow();
        });

        it('should reject invalid CertType', () => {
            const cert = { ...validCertification, cert_type: 'Invalid Type' };
            const result = safeParseCertification(cert);
            expect(result.success).toBe(false);
        });

        it('should accept valid SkillLevel', () => {
            const novice = { ...validCertification, skill_level: SkillLevel.NOVICE };
            const expert = { ...validCertification, skill_level: SkillLevel.EXPERT };

            expect(() => validateCertification(novice)).not.toThrow();
            expect(() => validateCertification(expert)).not.toThrow();
        });

        it('should reject invalid SkillLevel', () => {
            const cert = { ...validCertification, skill_level: 'Master' };
            const result = safeParseCertification(cert);
            expect(result.success).toBe(false);
        });
    });

    describe('Required Fields Validation', () => {
        it('should reject empty id', () => {
            const cert = { ...validCertification, id: '' };
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
            const cert = { id: 'test', title: 'Test' };
            const result = safeParseCertification(cert);
            expect(result.success).toBe(false);
        });
    });
});
