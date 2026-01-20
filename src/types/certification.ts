import { z } from 'zod';

/**
 * Certification Type Union
 */
export const CertTypeSchema = z.enum(["blue", "red", "infoSec"]);
export type CertType = z.infer<typeof CertTypeSchema>;

/**
 * Skill Level Union
 */
export const SkillLevelSchema = z.enum(["Novice", "Beginner", "Intermediate", "Advanced", "Expert"]);
export type SkillLevel = z.infer<typeof SkillLevelSchema>;

/**
 * Provider Schema
 */
export const ProviderSchema = z.object({
    name: z.string(),
    url: z.string().url(),
    image: z.string(),
}).nullable();

/**
 * Requirements Data Schema
 */
export const RequirementsDataSchema = z.object({
    knowledge: z.string(),
    work_experience: z.string(),
    prior_courses_and_certifications: z.string(),
});

/**
 * Exam Details Data Schema
 */
export const ExamDetailsDataSchema = z.object({
    format: z.string(),
    duration: z.string().nullable(),
    report_required: z.boolean(),
});

/**
 * Certification Schema
 * Validates all fields with strict constraints matching API structure
 */
export const CertificationSchema = z.object({
    id: z.number().int().positive(),
    slug: z.string().min(1),
    title: z.string().min(1),
    abbreviation: z.string().min(1),
    description: z.string().min(1),
    image: z.string(),
    url: z.string().url(),
    cost: z.string().min(1),
    training_included: z.boolean(),
    number_of_attempts: z.number().int().nonnegative(),
    job_roles_titles: z.array(z.string()),
    cert_type: CertTypeSchema,
    total_votes: z.number().int().nonnegative(),
    market_presence: z.number().min(0.0).max(1.0, "Market presence must be between 0.0 and 1.0"),
    cost_effectiveness: z.number().min(1.0).max(5.0, "Cost effectiveness must be between 1.0 and 5.0"),
    skill_level: SkillLevelSchema,
    quality: z.number().min(1.0).max(5.0, "Quality must be between 1.0 and 5.0"),
    satisfaction: z.number().min(1.0).max(5.0, "Satisfaction must be between 1.0 and 5.0"),
    provider: ProviderSchema,
    domains_covered_titles: z.array(z.string()),
    requirements_data: RequirementsDataSchema,
    exam_details_data: ExamDetailsDataSchema,
    valid_for: z.string().nullable(),
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

/**
 * Validate array of certifications
 */
export function validateCertifications(data: unknown): Certification[] {
    return z.array(CertificationSchema).parse(data);
}
