import { NextResponse } from 'next/server';
import { mockJobs } from '@/data/mockData';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');
  const type = searchParams.get('type');
  const location = searchParams.get('location');

  let filteredJobs = [...mockJobs];

  // Apply filters
  if (query) {
    const searchQuery = query.toLowerCase();
    filteredJobs = filteredJobs.filter(
      (job) =>
        job.title.toLowerCase().includes(searchQuery) ||
        job.company.toLowerCase().includes(searchQuery) ||
        job.description.toLowerCase().includes(searchQuery)
    );
  }

  if (type) {
    filteredJobs = filteredJobs.filter((job) => job.type === type);
  }

  if (location) {
    filteredJobs = filteredJobs.filter((job) => job.location === location);
  }

  return NextResponse.json(filteredJobs);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // TODO: Implement job creation logic
    // For now, just return the submitted data
    return NextResponse.json(
      { message: 'Job created successfully', job: body },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Error creating job' },
      { status: 500 }
    );
  }
} 