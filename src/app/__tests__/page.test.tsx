import { render, screen } from '@testing-library/react';
import Home from '../page';

describe('Home Page', () => {
    it('should render the page title', () => {
        render(<Home />);
        const title = screen.getByText('Cybersecurity Certification Roadmap');
        expect(title).toBeInTheDocument();
    });

    it('should render the page description', () => {
        render(<Home />);
        const description = screen.getByText(/Explore and compare cybersecurity certifications/i);
        expect(description).toBeInTheDocument();
    });

    it('should have a filter controls placeholder', () => {
        render(<Home />);
        const filterPlaceholder = screen.getByText(/Filter controls will appear here/i);
        expect(filterPlaceholder).toBeInTheDocument();
    });

    it('should have a chart container placeholder', () => {
        render(<Home />);
        const chartPlaceholder = screen.getByText(/Chart visualization coming soon/i);
        expect(chartPlaceholder).toBeInTheDocument();
    });
});
