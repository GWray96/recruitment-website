# RecruitPro - Modern Recruitment Platform

RecruitPro is a modern, full-stack recruitment platform built with Next.js 14, TypeScript, and Tailwind CSS. It provides a seamless experience for job seekers and employers to connect and find their perfect match.

## Features

- 🎯 Smart job matching algorithm
- 📱 Responsive design for all devices
- 🔍 Advanced job search and filtering
- 👤 Candidate and employer profiles
- 📝 Easy job posting and application process
- 🔔 Real-time notifications
- 📊 Analytics dashboard for employers
- 📚 Resource center with career advice

## Tech Stack

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Forms:** React Hook Form with Zod validation
- **Data Fetching:** React Query
- **Authentication:** NextAuth.js
- **Icons:** Lucide React
- **UI Components:** Custom components with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/recruitment-website.git
   cd recruitment-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory and add your environment variables:
   ```
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key
   # Add other environment variables as needed
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
src/
├── app/                    # App router pages
│   ├── jobs/              # Job-related pages
│   ├── candidates/        # Candidate-related pages
│   ├── employers/         # Employer-related pages
│   └── resources/         # Resource pages
├── components/            # React components
│   ├── layout/           # Layout components
│   ├── home/             # Homepage components
│   ├── jobs/             # Job-related components
│   ├── candidates/       # Candidate-related components
│   ├── employers/        # Employer-related components
│   ├── resources/        # Resource components
│   ├── ui/               # Reusable UI components
│   └── auth/             # Authentication components
├── lib/                  # Utility functions and hooks
│   ├── utils/           # Utility functions
│   ├── hooks/           # Custom React hooks
│   └── context/         # React context providers
├── types/               # TypeScript type definitions
└── data/               # Mock data and constants
```

## Development

### Code Style

- ESLint and Prettier are configured for consistent code formatting
- Follow the TypeScript best practices
- Use proper component composition and reusability
- Write meaningful comments and documentation

### Git Workflow

1. Create a new branch for each feature/fix
2. Write meaningful commit messages
3. Create pull requests for code review
4. Merge only after approval

## Deployment

The application can be deployed to any platform that supports Next.js, such as:

- Vercel (recommended)
- Netlify
- AWS
- Google Cloud Platform

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@recruitpro.com or join our Slack channel.

## Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- All contributors and maintainers
