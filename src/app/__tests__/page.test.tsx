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

    it('should render the certification filters', () => {
        render(<Home />);
        const clearButton = screen.getByRole('button', { name: /clear filters/i });
        expect(clearButton).toBeInTheDocument();
    });

    it('should render the results count', () => {
        render(<Home />);
        const resultsCount = screen.getByText(/showing.*certifications/i);
        expect(resultsCount).toBeInTheDocument();
    });
});
