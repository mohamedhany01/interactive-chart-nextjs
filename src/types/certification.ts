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
 * Certification Interface
 * Represents a cybersecurity certification with all relevant metadata
 */
export interface Certification {
    id: string;
    title: string;
    abbreviation: string;
    provider: string;
    cert_type: CertType;
    skill_level: SkillLevel;
    market_presence: number; // X-axis: 0.0 to 1.0 (normalized) or total votes
    satisfaction: number; // Y-axis: 1.0 to 5.0 (average score)
    total_votes: number;
    description: string;
    cost: string;
    exam_details: string;
    requirements_data: string;
}

/**
 * Filter State Interface
 */
export interface FilterState {
    certType: CertType | "all";
    skillLevel: SkillLevel | "all";
    searchQuery: string;
}
