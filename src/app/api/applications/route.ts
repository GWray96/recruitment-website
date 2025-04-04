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

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const jobId = searchParams.get('jobId');
  const candidateId = searchParams.get('candidateId');
  const status = searchParams.get('status');

  let filteredApplications = [...mockApplications];

  if (jobId) {
    filteredApplications = filteredApplications.filter(
      (app) => app.jobId === jobId
    );
  }

  if (candidateId) {
    filteredApplications = filteredApplications.filter(
      (app) => app.candidateId === candidateId
    );
  }

  if (status) {
    filteredApplications = filteredApplications.filter(
      (app) => app.status === status
    );
  }

  return NextResponse.json(filteredApplications);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // TODO: Implement application creation logic
    // For now, just return the submitted data
    return NextResponse.json(
      { message: 'Application submitted successfully', application: body },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Error submitting application' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, status } = body;
    
    // TODO: Implement application status update logic
    // For now, just return the submitted data
    return NextResponse.json(
      { message: 'Application status updated successfully', application: body },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Error updating application status' },
      { status: 500 }
    );
  }
}

// Get application by ID
export async function GET_APPLICATION(
  request: Request,
  { params }: { params: { id: string } }
) {
  const application = mockApplications.find((a) => a.id === params.id);
  
  if (!application) {
    return NextResponse.json(
      { message: 'Application not found' },
      { status: 404 }
    );
  }

  return NextResponse.json(application);
} 