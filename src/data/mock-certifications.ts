import { Certification } from '@/types/certification';

/**
 * Mock Certification Data
 * 15+ sample certifications covering Blue Team, Red Team, and InfoSec
 */
export const mockCertifications: Certification[] = [
    // Blue Team Certifications
    {
        id: 1,
        slug: "cissp",
        title: "Certified Information Systems Security Professional",
        abbreviation: "CISSP",
        description: "A globally recognized certification in information security that validates an IT professional's deep technical and managerial knowledge and experience to design, engineer, and manage the overall security posture of an organization.",
        image: "/certs/cissp.png",
        url: "https://www.isc2.org/Certifications/CISSP",
        cost: "$749 USD",
        training_included: false,
        number_of_attempts: 3,
        job_roles_titles: ["Security Architect", "Security Consultant", "CISO", "Security Manager"],
        cert_type: "infoSec",
        total_votes: 2450,
        market_presence: 0.92,
        cost_effectiveness: 4.5,
        skill_level: "Advanced",
        quality: 4.7,
        satisfaction: 4.6,
        provider: {
            name: "(ISC)²",
            url: "https://www.isc2.org",
            image: "/providers/isc2.png"
        },
        domains_covered_titles: ["Security and Risk Management", "Asset Security", "Security Architecture", "Communication and Network Security"],
        requirements_data: {
            knowledge: "Understanding of 8 CISSP domains",
            work_experience: "5 years of cumulative paid work experience in 2 or more of the 8 domains",
            prior_courses_and_certifications: "None required"
        },
        exam_details_data: {
            format: "Multiple choice and advanced innovative questions",
            duration: "6 hours",
            report_required: false
        },
        valid_for: "3 years"
    },
    {
        id: 2,
        slug: "security-plus",
        title: "CompTIA Security+",
        abbreviation: "Security+",
        description: "An entry-level cybersecurity certification that validates the baseline skills necessary to perform core security functions and pursue an IT security career.",
        image: "/certs/security-plus.png",
        url: "https://www.comptia.org/certifications/security",
        cost: "$392 USD",
        training_included: false,
        number_of_attempts: 1,
        job_roles_titles: ["Security Administrator", "Security Specialist", "Systems Administrator", "Network Administrator"],
        cert_type: "blue",
        total_votes: 3120,
        market_presence: 0.88,
        cost_effectiveness: 4.8,
        skill_level: "Beginner",
        quality: 4.5,
        satisfaction: 4.7,
        provider: {
            name: "CompTIA",
            url: "https://www.comptia.org",
            image: "/providers/comptia.png"
        },
        domains_covered_titles: ["Threats, Attacks and Vulnerabilities", "Architecture and Design", "Implementation", "Operations and Incident Response"],
        requirements_data: {
            knowledge: "Basic networking and security concepts",
            work_experience: "2 years of IT administration experience recommended",
            prior_courses_and_certifications: "Network+ recommended but not required"
        },
        exam_details_data: {
            format: "Multiple choice and performance-based",
            duration: "90 minutes",
            report_required: false
        },
        valid_for: "3 years"
    },
    {
        id: 3,
        slug: "ceh",
        title: "Certified Ethical Hacker",
        abbreviation: "CEH",
        description: "A certification that demonstrates knowledge of assessing the security of computer systems by looking for weaknesses and vulnerabilities in target systems, using the same knowledge and tools as a malicious hacker.",
        image: "/certs/ceh.png",
        url: "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/",
        cost: "$1,199 USD",
        training_included: false,
        number_of_attempts: 1,
        job_roles_titles: ["Ethical Hacker", "Penetration Tester", "Security Analyst", "Security Consultant"],
        cert_type: "red",
        total_votes: 1890,
        market_presence: 0.75,
        cost_effectiveness: 3.8,
        skill_level: "Intermediate",
        quality: 4.2,
        satisfaction: 4.1,
        provider: {
            name: "EC-Council",
            url: "https://www.eccouncil.org",
            image: "/providers/eccouncil.png"
        },
        domains_covered_titles: ["Footprinting and Reconnaissance", "Scanning Networks", "Enumeration", "System Hacking", "Malware Threats"],
        requirements_data: {
            knowledge: "Understanding of TCP/IP, networking concepts, and security fundamentals",
            work_experience: "2 years of information security experience",
            prior_courses_and_certifications: "Attend official CEH training or have 2 years experience"
        },
        exam_details_data: {
            format: "Multiple choice",
            duration: "4 hours",
            report_required: false
        },
        valid_for: "3 years"
    },
    {
        id: 4,
        slug: "oscp",
        title: "Offensive Security Certified Professional",
        abbreviation: "OSCP",
        description: "A hands-on penetration testing certification that requires candidates to successfully attack and penetrate various live machines in a safe lab environment.",
        image: "/certs/oscp.png",
        url: "https://www.offensive-security.com/pwk-oscp/",
        cost: "$1,649 USD",
        training_included: true,
        number_of_attempts: 2,
        job_roles_titles: ["Penetration Tester", "Security Researcher", "Red Team Operator", "Offensive Security Engineer"],
        cert_type: "red",
        total_votes: 2210,
        market_presence: 0.82,
        cost_effectiveness: 4.6,
        skill_level: "Advanced",
        quality: 4.9,
        satisfaction: 4.8,
        provider: {
            name: "Offensive Security",
            url: "https://www.offensive-security.com",
            image: "/providers/offsec.png"
        },
        domains_covered_titles: ["Penetration Testing Methodologies", "Information Gathering", "Vulnerability Analysis", "Exploitation", "Post-Exploitation"],
        requirements_data: {
            knowledge: "Solid understanding of TCP/IP networking, Linux, and Windows administration",
            work_experience: "Practical experience with penetration testing tools",
            prior_courses_and_certifications: "None required but experience recommended"
        },
        exam_details_data: {
            format: "Practical exam - compromise machines in lab environment",
            duration: "24 hours",
            report_required: true
        },
        valid_for: "Lifetime"
    },
    {
        id: 5,
        slug: "cism",
        title: "Certified Information Security Manager",
        abbreviation: "CISM",
        description: "A certification for experienced information security managers that validates expertise in information security governance, program development and management, incident management and risk management.",
        image: "/certs/cism.png",
        url: "https://www.isaca.org/credentialing/cism",
        cost: "$575 USD",
        training_included: false,
        number_of_attempts: 3,
        job_roles_titles: ["Information Security Manager", "IT Security Manager", "Security Director", "CISO"],
        cert_type: "infoSec",
        total_votes: 1650,
        market_presence: 0.78,
        cost_effectiveness: 4.3,
        skill_level: "Expert",
        quality: 4.6,
        satisfaction: 4.5,
        provider: {
            name: "ISACA",
            url: "https://www.isaca.org",
            image: "/providers/isaca.png"
        },
        domains_covered_titles: ["Information Security Governance", "Information Risk Management", "Information Security Program", "Incident Management"],
        requirements_data: {
            knowledge: "Understanding of information security management principles",
            work_experience: "5 years of information security work experience with 3 years in management",
            prior_courses_and_certifications: "None required"
        },
        exam_details_data: {
            format: "Multiple choice",
            duration: "4 hours",
            report_required: false
        },
        valid_for: "3 years"
    },
    {
        id: 6,
        slug: "ccsp",
        title: "Certified Cloud Security Professional",
        abbreviation: "CCSP",
        description: "An advanced technical certification that demonstrates competence in cloud security architecture, design, operations, and service orchestration.",
        image: "/certs/ccsp.png",
        url: "https://www.isc2.org/Certifications/CCSP",
        cost: "$599 USD",
        training_included: false,
        number_of_attempts: 3,
        job_roles_titles: ["Cloud Security Architect", "Cloud Security Engineer", "Security Systems Engineer", "Cloud Security Consultant"],
        cert_type: "blue",
        total_votes: 980,
        market_presence: 0.65,
        cost_effectiveness: 4.4,
        skill_level: "Advanced",
        quality: 4.5,
        satisfaction: 4.4,
        provider: {
            name: "(ISC)²",
            url: "https://www.isc2.org",
            image: "/providers/isc2.png"
        },
        domains_covered_titles: ["Cloud Concepts", "Cloud Data Security", "Cloud Platform & Infrastructure Security", "Cloud Application Security"],
        requirements_data: {
            knowledge: "Understanding of cloud computing and security principles",
            work_experience: "5 years of IT experience with 3 years in information security and 1 year in cloud security",
            prior_courses_and_certifications: "None required"
        },
        exam_details_data: {
            format: "Multiple choice",
            duration: "4 hours",
            report_required: false
        },
        valid_for: "3 years"
    },
    {
        id: 7,
        slug: "gcih",
        title: "GIAC Certified Incident Handler",
        abbreviation: "GCIH",
        description: "A certification that validates a practitioner's ability to detect, respond to, and resolve computer security incidents using a wide range of essential security skills.",
        image: "/certs/gcih.png",
        url: "https://www.giac.org/certifications/certified-incident-handler-gcih/",
        cost: "$949 USD",
        training_included: false,
        number_of_attempts: 2,
        job_roles_titles: ["Incident Handler", "Incident Responder", "Security Analyst", "SOC Analyst"],
        cert_type: "blue",
        total_votes: 1120,
        market_presence: 0.58,
        cost_effectiveness: 4.1,
        skill_level: "Intermediate",
        quality: 4.4,
        satisfaction: 4.3,
        provider: {
            name: "GIAC",
            url: "https://www.giac.org",
            image: "/providers/giac.png"
        },
        domains_covered_titles: ["Incident Handling", "Computer Crime Investigation", "Hacker Exploits", "Incident Response"],
        requirements_data: {
            knowledge: "Understanding of TCP/IP, common internet applications, and Windows/Unix systems",
            work_experience: "Some security or system administration experience recommended",
            prior_courses_and_certifications: "None required"
        },
        exam_details_data: {
            format: "Multiple choice",
            duration: "4 hours",
            report_required: false
        },
        valid_for: "4 years"
    },
    {
        id: 8,
        slug: "gpen",
        title: "GIAC Penetration Tester",
        abbreviation: "GPEN",
        description: "A certification that validates a practitioner's ability to properly conduct a penetration test, using best practice techniques and methodologies.",
        image: "/certs/gpen.png",
        url: "https://www.giac.org/certifications/penetration-tester-gpen/",
        cost: "$949 USD",
        training_included: false,
        number_of_attempts: 2,
        job_roles_titles: ["Penetration Tester", "Security Consultant", "Ethical Hacker", "Security Analyst"],
        cert_type: "red",
        total_votes: 1340,
        market_presence: 0.62,
        cost_effectiveness: 4.2,
        skill_level: "Advanced",
        quality: 4.6,
        satisfaction: 4.5,
        provider: {
            name: "GIAC",
            url: "https://www.giac.org",
            image: "/providers/giac.png"
        },
        domains_covered_titles: ["Penetration Testing", "Vulnerability Assessment", "Web Application Testing", "Network Exploitation"],
        requirements_data: {
            knowledge: "Strong understanding of networking, operating systems, and security concepts",
            work_experience: "Hands-on experience with penetration testing tools",
            prior_courses_and_certifications: "SEC560 course recommended"
        },
        exam_details_data: {
            format: "Multiple choice",
            duration: "4 hours",
            report_required: false
        },
        valid_for: "4 years"
    },
    {
        id: 9,
        slug: "cysa-plus",
        title: "CompTIA Cybersecurity Analyst",
        abbreviation: "CySA+",
        description: "An intermediate-level cybersecurity certification that validates skills in detecting and responding to security threats through continuous security monitoring.",
        image: "/certs/cysa-plus.png",
        url: "https://www.comptia.org/certifications/cybersecurity-analyst",
        cost: "$392 USD",
        training_included: false,
        number_of_attempts: 1,
        job_roles_titles: ["Security Analyst", "Threat Intelligence Analyst", "SOC Analyst", "Cybersecurity Analyst"],
        cert_type: "blue",
        total_votes: 1580,
        market_presence: 0.71,
        cost_effectiveness: 4.6,
        skill_level: "Intermediate",
        quality: 4.4,
        satisfaction: 4.5,
        provider: {
            name: "CompTIA",
            url: "https://www.comptia.org",
            image: "/providers/comptia.png"
        },
        domains_covered_titles: ["Threat and Vulnerability Management", "Software and Systems Security", "Security Operations and Monitoring", "Incident Response"],
        requirements_data: {
            knowledge: "Understanding of security concepts and tools",
            work_experience: "3-4 years of hands-on information security or related experience",
            prior_courses_and_certifications: "Network+ and Security+ recommended"
        },
        exam_details_data: {
            format: "Multiple choice and performance-based",
            duration: "165 minutes",
            report_required: false
        },
        valid_for: "3 years"
    },
    {
        id: 10,
        slug: "crisc",
        title: "Certified in Risk and Information Systems Control",
        abbreviation: "CRISC",
        description: "A certification for IT professionals who identify and manage enterprise IT risk and implement and maintain information systems controls.",
        image: "/certs/crisc.png",
        url: "https://www.isaca.org/credentialing/crisc",
        cost: "$575 USD",
        training_included: false,
        number_of_attempts: 3,
        job_roles_titles: ["Risk Manager", "IT Risk Analyst", "Compliance Manager", "IT Auditor"],
        cert_type: "infoSec",
        total_votes: 890,
        market_presence: 0.54,
        cost_effectiveness: 4.2,
        skill_level: "Advanced",
        quality: 4.3,
        satisfaction: 4.2,
        provider: {
            name: "ISACA",
            url: "https://www.isaca.org",
            image: "/providers/isaca.png"
        },
        domains_covered_titles: ["IT Risk Identification", "IT Risk Assessment", "Risk Response and Reporting", "Information Technology and Security"],
        requirements_data: {
            knowledge: "Understanding of IT risk management and IS control",
            work_experience: "3 years of experience in at least 2 of the 4 CRISC domains",
            prior_courses_and_certifications: "None required"
        },
        exam_details_data: {
            format: "Multiple choice",
            duration: "4 hours",
            report_required: false
        },
        valid_for: "3 years"
    },
    {
        id: 11,
        slug: "sscp",
        title: "Systems Security Certified Practitioner",
        abbreviation: "SSCP",
        description: "An ideal certification for those with proven technical skills and practical, hands-on security knowledge in operational IT roles.",
        image: "/certs/sscp.png",
        url: "https://www.isc2.org/Certifications/SSCP",
        cost: "$249 USD",
        training_included: false,
        number_of_attempts: 3,
        job_roles_titles: ["Security Administrator", "Network Security Engineer", "Security Analyst", "Systems Administrator"],
        cert_type: "blue",
        total_votes: 760,
        market_presence: 0.48,
        cost_effectiveness: 4.7,
        skill_level: "Intermediate",
        quality: 4.2,
        satisfaction: 4.3,
        provider: {
            name: "(ISC)²",
            url: "https://www.isc2.org",
            image: "/providers/isc2.png"
        },
        domains_covered_titles: ["Access Controls", "Security Operations and Administration", "Risk Identification, Monitoring and Analysis", "Incident Response and Recovery"],
        requirements_data: {
            knowledge: "Understanding of the 7 SSCP domains",
            work_experience: "1 year of cumulative work experience in 1 or more of the 7 domains",
            prior_courses_and_certifications: "None required"
        },
        exam_details_data: {
            format: "Multiple choice",
            duration: "3 hours",
            report_required: false
        },
        valid_for: "3 years"
    },
    {
        id: 12,
        slug: "pnpt",
        title: "Practical Network Penetration Tester",
        abbreviation: "PNPT",
        description: "A hands-on certification that assesses a student's ability to perform an external and internal network penetration test at a professional level.",
        image: "/certs/pnpt.png",
        url: "https://certifications.tcm-sec.com/pnpt/",
        cost: "$399 USD",
        training_included: true,
        number_of_attempts: 2,
        job_roles_titles: ["Penetration Tester", "Security Consultant", "Red Team Operator", "Security Researcher"],
        cert_type: "red",
        total_votes: 1450,
        market_presence: 0.56,
        cost_effectiveness: 4.9,
        skill_level: "Intermediate",
        quality: 4.7,
        satisfaction: 4.8,
        provider: {
            name: "TCM Security",
            url: "https://tcm-sec.com",
            image: "/providers/tcm.png"
        },
        domains_covered_titles: ["Open-Source Intelligence", "External Penetration Testing", "Internal Penetration Testing", "Active Directory Attacks"],
        requirements_data: {
            knowledge: "Basic understanding of networking and Linux",
            work_experience: "None required",
            prior_courses_and_certifications: "Completion of PEH, OSINT, and Linux courses recommended"
        },
        exam_details_data: {
            format: "Practical exam with report submission",
            duration: "5 days",
            report_required: true
        },
        valid_for: "Lifetime"
    },
    {
        id: 13,
        slug: "cisa",
        title: "Certified Information Systems Auditor",
        abbreviation: "CISA",
        description: "A globally recognized certification for professionals who audit, control, monitor and assess an organization's information technology and business systems.",
        image: "/certs/cisa.png",
        url: "https://www.isaca.org/credentialing/cisa",
        cost: "$575 USD",
        training_included: false,
        number_of_attempts: 3,
        job_roles_titles: ["IT Auditor", "Security Auditor", "Compliance Analyst", "Risk Analyst"],
        cert_type: "infoSec",
        total_votes: 1280,
        market_presence: 0.69,
        cost_effectiveness: 4.3,
        skill_level: "Advanced",
        quality: 4.4,
        satisfaction: 4.3,
        provider: {
            name: "ISACA",
            url: "https://www.isaca.org",
            image: "/providers/isaca.png"
        },
        domains_covered_titles: ["Information System Auditing Process", "Governance and Management of IT", "Information Systems Acquisition", "Information Systems Operations"],
        requirements_data: {
            knowledge: "Understanding of IS audit processes and standards",
            work_experience: "5 years of professional information systems auditing, control or security work experience",
            prior_courses_and_certifications: "None required"
        },
        exam_details_data: {
            format: "Multiple choice",
            duration: "4 hours",
            report_required: false
        },
        valid_for: "3 years"
    },
    {
        id: 14,
        slug: "gwapt",
        title: "GIAC Web Application Penetration Tester",
        abbreviation: "GWAPT",
        description: "A certification that validates a practitioner's ability to better secure organizations through penetration testing and a thorough understanding of web application security issues.",
        image: "/certs/gwapt.png",
        url: "https://www.giac.org/certifications/web-application-penetration-tester-gwapt/",
        cost: "$949 USD",
        training_included: false,
        number_of_attempts: 2,
        job_roles_titles: ["Web Application Penetration Tester", "Application Security Analyst", "Security Consultant", "Ethical Hacker"],
        cert_type: "red",
        total_votes: 670,
        market_presence: 0.42,
        cost_effectiveness: 4.0,
        skill_level: "Advanced",
        quality: 4.5,
        satisfaction: 4.4,
        provider: {
            name: "GIAC",
            url: "https://www.giac.org",
            image: "/providers/giac.png"
        },
        domains_covered_titles: ["Web Application Reconnaissance", "Injection Attacks", "Authentication and Session Management", "Cross-Site Scripting"],
        requirements_data: {
            knowledge: "Understanding of web technologies and security concepts",
            work_experience: "Experience with web application security testing",
            prior_courses_and_certifications: "SEC542 course recommended"
        },
        exam_details_data: {
            format: "Multiple choice",
            duration: "4 hours",
            report_required: false
        },
        valid_for: "4 years"
    },
    {
        id: 15,
        slug: "ecih",
        title: "EC-Council Certified Incident Handler",
        abbreviation: "ECIH",
        description: "A specialist-level program that imparts knowledge and skills that organizations need to effectively handle post breach consequences by reducing the impact of the incident.",
        image: "/certs/ecih.png",
        url: "https://www.eccouncil.org/programs/ec-council-certified-incident-handler-ecih/",
        cost: "$999 USD",
        training_included: false,
        number_of_attempts: 1,
        job_roles_titles: ["Incident Handler", "Incident Responder", "SOC Analyst", "Forensic Analyst"],
        cert_type: "blue",
        total_votes: 540,
        market_presence: 0.38,
        cost_effectiveness: 3.9,
        skill_level: "Intermediate",
        quality: 4.1,
        satisfaction: 4.0,
        provider: {
            name: "EC-Council",
            url: "https://www.eccouncil.org",
            image: "/providers/eccouncil.png"
        },
        domains_covered_titles: ["Incident Handling and Response", "Forensic Readiness", "Network Security Monitoring", "Malware Incident Response"],
        requirements_data: {
            knowledge: "Understanding of information security and incident handling",
            work_experience: "1 year of experience in network security or related field",
            prior_courses_and_certifications: "Attend official training or have 2 years experience"
        },
        exam_details_data: {
            format: "Multiple choice",
            duration: "3 hours",
            report_required: false
        },
        valid_for: "3 years"
    },
    {
        id: 16,
        slug: "ejpt",
        title: "eLearnSecurity Junior Penetration Tester",
        abbreviation: "eJPT",
        description: "An entry-level practical certification that validates core penetration testing skills through a hands-on exam in a simulated environment.",
        image: "/certs/ejpt.png",
        url: "https://elearnsecurity.com/product/ejpt-certification/",
        cost: "$249 USD",
        training_included: true,
        number_of_attempts: 3,
        job_roles_titles: ["Junior Penetration Tester", "Security Analyst", "Junior Security Consultant", "SOC Analyst"],
        cert_type: "red",
        total_votes: 1820,
        market_presence: 0.64,
        cost_effectiveness: 4.8,
        skill_level: "Beginner",
        quality: 4.3,
        satisfaction: 4.6,
        provider: {
            name: "INE Security",
            url: "https://ine.com",
            image: "/providers/ine.png"
        },
        domains_covered_titles: ["Assessment Methodologies", "Host and Network Auditing", "Host and Network Penetration Testing", "Web Application Penetration Testing"],
        requirements_data: {
            knowledge: "Basic understanding of networking and security concepts",
            work_experience: "None required",
            prior_courses_and_certifications: "None required"
        },
        exam_details_data: {
            format: "Practical exam in simulated environment",
            duration: "48 hours",
            report_required: false
        },
        valid_for: "Lifetime"
    }
];
