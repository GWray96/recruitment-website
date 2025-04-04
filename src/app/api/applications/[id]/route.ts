import { NextResponse } from 'next/server';

interface JobApplication {
  id: string;
  jobId: string;
  candidateId: string;
  status: 'pending' | 'reviewing' | 'accepted' | 'rejected';
  appliedAt: string;
  coverLetter?: string;
  resumeUrl: string;
}

// Mock applications data
const mockApplications: JobApplication[] = [
  {
    id: '1',
    jobId: '1',
    candidateId: '1',
    status: 'pending',
    appliedAt: '2024-03-15T10:00:00Z',
    coverLetter: 'I am excited to apply for this position...',
    resumeUrl: 'https://example.com/resumes/candidate1.pdf',
  },
  {
    id: '2',
    jobId: '2',
    candidateId: '2',
    status: 'reviewing',
    appliedAt: '2024-03-14T15:30:00Z',
    resumeUrl: 'https://example.com/resumes/candidate2.pdf',
  },
];

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const application = mockApplications.find(app => app.id === params.id);
  
  if (!application) {
    return NextResponse.json(
      { message: 'Application not found' },
      { status: 404 }
    );
  }

  return NextResponse.json(application);
} 