import { z } from 'zod';

/**
 * Certification Type Enum
 */
export enum CertType {
    BLUE_TEAM = "Blue Team",
    RED_TEAM = "Red Team",
    INFOSEC = "InfoSec",
}

/**
 * Skill Level Enum
 */
export enum SkillLevel {
    NOVICE = "Novice",
    BEGINNER = "Beginner",
    INTERMEDIATE = "Intermediate",
    ADVANCED = "Advanced",
    EXPERT = "Expert",
}

/**
 * Zod Schema for CertType
 */
export const CertTypeSchema = z.nativeEnum(CertType);

/**
 * Zod Schema for SkillLevel
 */
export const SkillLevelSchema = z.nativeEnum(SkillLevel);

/**
 * Zod Schema for Certification
 * Validates all fields with strict constraints
 */
export const CertificationSchema = z.object({
    id: z.string().min(1, "ID must not be empty"),
    title: z.string().min(1, "Title must not be empty"),
    abbreviation: z.string().min(1, "Abbreviation must not be empty"),
    provider: z.string().min(1, "Provider must not be empty"),
    cert_type: CertTypeSchema,
    skill_level: SkillLevelSchema,
    market_presence: z.number().min(0.0).max(1.0, "Market presence must be between 0.0 and 1.0"),
    satisfaction: z.number().min(1.0).max(5.0, "Satisfaction must be between 1.0 and 5.0"),
    total_votes: z.number().int().nonnegative("Total votes must be a non-negative integer"),
    description: z.string().min(1, "Description must not be empty"),
    cost: z.string().min(1, "Cost must not be empty"),
    exam_details: z.string().min(1, "Exam details must not be empty"),
    requirements_data: z.string().min(1, "Requirements data must not be empty"),
});

/**
 * TypeScript type inferred from Zod schema
 */
export type Certification = z.infer<typeof CertificationSchema>;

/**
 * Filter State Interface
 */
export interface FilterState {
    certType: CertType | "all";
    skillLevel: SkillLevel | "all";
    searchQuery: string;
}

/**
 * Validation helper function
 */
export function validateCertification(data: unknown): Certification {
    return CertificationSchema.parse(data);
}

/**
 * Safe validation helper (returns result object instead of throwing)
 */
export function safeParseCertification(data: unknown) {
    return CertificationSchema.safeParse(data);
}
