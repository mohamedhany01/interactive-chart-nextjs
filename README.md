# Cybersecurity Certification Roadmap

An interactive visualization tool for exploring and comparing cybersecurity certifications based on market presence and community satisfaction.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run tests
npm test

# Build for production
npm run build

# Run security checks
npm audit
node scripts/verify-versions.js
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

## 📋 Features

### Core Functionality
- **Interactive Scatter Plot**: Visualize certifications by market presence (X-axis) and satisfaction score (Y-axis)
- **Color Coding**: Certifications color-coded by type:
  - 🔵 Blue Team (Defensive Security)
  - 🔴 Red Team (Offensive Security)
  - 🟢 InfoSec (General Information Security)
- **Quadrant Analysis**: Certifications grouped into Leaders, Challengers, Contenders, and Niche Players
- **Filtering**: Filter by certification type, skill level, or search by name/abbreviation
- **Detail Modal**: Click any certification to view comprehensive details
- **Full-Screen Mode**: Expand chart for better visualization
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices

### Technical Features
- ✅ 90 unit tests with 100% pass rate
- ✅ Type-safe with TypeScript and Zod validation
- ✅ Dark theme UI with shadcn/ui components
- ✅ CI/CD pipeline with GitHub Actions
- ✅ Security compliance (CVE-2025-55182, CVE-2025-55184, CVE-2025-67779)

## 🏗️ Architecture

### Tech Stack
- **Framework**: Next.js 16.1.4 (App Router)
- **Language**: TypeScript
- **UI Library**: shadcn/ui (Radix UI + Tailwind CSS)
- **Charts**: Recharts
- **Validation**: Zod
- **Testing**: Jest + React Testing Library
- **CI/CD**: GitHub Actions

### Project Structure
```
src/
├── app/                    # Next.js app router pages
│   ├── page.tsx           # Main application page
│   └── __tests__/         # Page tests
├── components/            # React components
│   ├── CertificationChart.tsx        # Scatter plot chart
│   ├── CertificationFilters.tsx      # Filter controls
│   ├── CertificationDetailModal.tsx  # Detail modal
│   ├── CustomCertNode.tsx            # Custom scatter node
│   ├── ui/                           # shadcn/ui components
│   └── __tests__/                    # Component tests
├── hooks/                 # Custom React hooks
│   └── useChartFilters.ts # Filter state management
├── types/                 # TypeScript type definitions
│   └── certification.ts   # Zod schemas and types
├── data/                  # Mock data
│   └── mock-certifications.ts # 16 sample certifications
└── lib/                   # Utility functions
```

### Key Design Decisions

**1. Zod for Runtime Validation**
- Ensures data integrity at runtime
- Validates API responses match expected schema
- Strict constraints on numerical ranges (market_presence: 0-1, satisfaction: 1-5)

**2. Custom Hook for Filter Logic**
- Separates business logic from UI components
- Enables comprehensive unit testing
- Reusable across different views

**3. Recharts for Visualization**
- Declarative API matches React paradigm
- Built-in responsive container
- Customizable scatter nodes for color coding

**4. shadcn/ui Component Library**
- Copy-paste components (full control)
- Built on Radix UI (accessibility)
- Tailwind CSS for styling flexibility

**5. App Router (Next.js 14+)**
- Server Components by default
- Client Components only where needed ('use client')
- Better performance and SEO

## 🔒 Security

### CVE Compliance
This project addresses the following critical vulnerabilities:
- **CVE-2025-55182**: React Server Components RCE
- **CVE-2025-55184**: React Server Components RCE
- **CVE-2025-67779**: React Server Components RCE

**Mitigations:**
- Next.js ≥16.0.10 (current: 16.1.4)
- React ≥19.0.3 (current: 19.2.3)
- Automated version verification in CI/CD
- Regular `npm audit` checks

## 📊 Data Structure

Certifications follow this schema:

```typescript
{
  id: number;
  slug: string;
  title: string;
  abbreviation: string;
  cert_type: "blue" | "red" | "infoSec";
  skill_level: "Novice" | "Beginner" | "Intermediate" | "Advanced" | "Expert";
  market_presence: number; // 0.0 to 1.0
  satisfaction: number; // 1.0 to 5.0
  total_votes: number;
  // ... additional fields
}
```

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run specific test file
npm test -- src/components/__tests__/CertificationChart.test.tsx
```

**Test Coverage:**
- Component rendering tests
- Filter logic unit tests
- Data validation tests
- Integration tests
- Snapshot tests

## 🎯 Assumptions

1. **Data Source**: Currently uses mock data (16 certifications). In production, this would connect to a real API endpoint.

2. **Market Presence Calculation**: Assumed to be a normalized value (0-1) representing the certification's market share or popularity.

3. **Satisfaction Score**: Assumed to be an average rating from community votes on a 1-5 scale.

4. **Quadrant Thresholds**: 
   - Market presence split at 50% (0.5)
   - Satisfaction split at 3.0/5.0

5. **Color Scheme**: 
   - Blue for defensive security (Blue Team)
   - Red for offensive security (Red Team)
   - Green for general InfoSec

6. **Mobile Interactions**: Touch events treated as click events for modal opening.

## ⚠️ Known Limitations

1. **Static Data**: Currently uses mock data instead of live API
2. **Limited Animations**: Basic hover effects only (no complex transitions)
3. **No Data Export**: Cannot export chart as image or download data
4. **Single Language**: English only (no i18n)
5. **Browser Support**: Optimized for modern browsers (Chrome, Firefox, Safari, Edge)
6. **Accessibility**: Basic ARIA labels present but could be enhanced further

## 🔄 Trade-offs

1. **Client-Side Filtering vs Server-Side**
   - **Chosen**: Client-side filtering
   - **Rationale**: Better UX with instant updates, acceptable for small dataset (16 items)
   - **Trade-off**: Would need server-side pagination for 1000+ items

2. **Custom Nodes vs Default Scatter Points**
   - **Chosen**: Custom SVG nodes with color coding
   - **Rationale**: Required for color-by-type feature
   - **Trade-off**: Slightly more complex rendering logic

3. **Modal vs Inline Detail View**
   - **Chosen**: Modal dialog
   - **Rationale**: Doesn't disrupt chart layout, works better on mobile
   - **Trade-off**: Requires extra click to view details

4. **Recharts vs D3.js**
   - **Chosen**: Recharts
   - **Rationale**: React-friendly API, faster development
   - **Trade-off**: Less customization than D3, but sufficient for requirements

## 🚀 Future Enhancements

- [ ] Connect to real API endpoint
- [ ] Add animations/transitions on filter changes
- [ ] Export chart as PNG/SVG
- [ ] Keyboard navigation for accessibility
- [ ] Multi-language support (i18n)
- [ ] Dark/light theme toggle
- [ ] Comparison mode (select multiple certs)
- [ ] Historical data and trends
- [ ] User ratings and reviews

## 📝 License

MIT

## 👤 Author

Built with Next.js, TypeScript, and ❤️
