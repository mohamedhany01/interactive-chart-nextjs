import { render } from '@testing-library/react';
import { CertificationChart } from '../CertificationChart';
import { Certification } from '@/types/certification';

describe('CertificationChart', () => {
    const mockData: Certification[] = [
        {
            id: 1,
            slug: 'cissp',
            title: 'CISSP',
            abbreviation: 'CISSP',
            description: 'Security cert',
            image: '',
            url: 'https://example.com',
            cost: '$749',
            training_included: false,
            number_of_attempts: 3,
            job_roles_titles: ['Security Architect'],
            cert_type: 'infoSec',
            total_votes: 1000,
            market_presence: 0.9,
            satisfaction: 4.5,
            cost_effectiveness: 4.5,
            skill_level: 'Advanced',
            quality: 4.7,
            provider: { name: 'ISC2', url: 'https://isc2.org', image: '' },
            domains_covered_titles: ['Security'],
            requirements_data: { knowledge: '', work_experience: '', prior_courses_and_certifications: '' },
            exam_details_data: { format: 'Multiple choice', duration: '6 hours', report_required: false },
            valid_for: '3 years',
        },
        {
            id: 2,
            slug: 'oscp',
            title: 'OSCP',
            abbreviation: 'OSCP',
            description: 'Pentesting cert',
            image: '',
            url: 'https://example.com',
            cost: '$1649',
            training_included: true,
            number_of_attempts: 2,
            job_roles_titles: ['Pentester'],
            cert_type: 'red',
            total_votes: 800,
            market_presence: 0.7,
            satisfaction: 4.8,
            cost_effectiveness: 4.6,
            skill_level: 'Advanced',
            quality: 4.9,
            provider: { name: 'OffSec', url: 'https://offsec.com', image: '' },
            domains_covered_titles: ['Pentesting'],
            requirements_data: { knowledge: '', work_experience: '', prior_courses_and_certifications: '' },
            exam_details_data: { format: 'Practical', duration: '24 hours', report_required: true },
            valid_for: 'Lifetime',
        },
    ];

    it('should render without crashing with data', () => {
        const { container } = render(<CertificationChart data={mockData} />);
        expect(container).toBeInTheDocument();
    });

    it('should render without crashing with empty data', () => {
        const { container } = render(<CertificationChart data={[]} />);
        expect(container).toBeInTheDocument();
    });

    it('should accept certification data as prop', () => {
        expect(() => render(<CertificationChart data={mockData} />)).not.toThrow();
    });
});
