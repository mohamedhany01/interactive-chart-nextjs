# Cybersecurity Certification Roadmap

An interactive visualization tool for exploring cybersecurity certifications based on market presence and user satisfaction.

## Tech Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Theme:** Dark mode (default)

## Project Structure

```
interactive-chart/
├── src/
│   ├── app/              # Next.js app router pages
│   │   ├── layout.tsx    # Root layout with dark theme
│   │   ├── page.tsx      # Home page
│   │   └── globals.css   # Global styles
│   ├── components/       # React components
│   │   └── ui/          # shadcn/ui components (to be added)
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   │   └── utils.ts     # Class merging utility
│   ├── types/           # TypeScript type definitions
│   │   └── certification.ts  # Certification data types
│   └── data/            # Mock data and data utilities
├── public/              # Static assets
└── package.json         # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

Dependencies are already installed. If you need to reinstall:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Create a production build:

```bash
npm run build
npm start
```

## Type Definitions

The project uses TypeScript enums and interfaces for type safety:

- **CertType:** Blue Team, Red Team, InfoSec
- **SkillLevel:** Novice, Beginner, Intermediate, Advanced, Expert
- **Certification:** Complete certification data structure

## Next Steps

1. Install shadcn/ui components (Button, Card, Dialog, Dropdown, Input)
2. Create mock certification data
3. Implement filtering logic
4. Build UI controls (tabs, dropdown, search)
5. Integrate chart library and implement visualization
6. Add interactive features (tooltips, modal, fullscreen)

## License

ISC
