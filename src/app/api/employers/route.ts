import { NextResponse } from 'next/server';
import { Employer } from '@/types';

// Mock employers data
const mockEmployers: Employer[] = [
  {
    id: '1',
    companyName: 'TechCorp Inc.',
    email: 'hr@techcorp.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, NY',
    description:
      'TechCorp Inc. is a leading technology company specializing in software development and digital solutions.',
    website: 'https://techcorp.com',
    logoUrl: 'https://techcorp.com/logo.png',
    industry: 'Technology',
    size: '501-1000 employees',
  },
  {
    id: '2',
    companyName: 'Innovation Labs',
    email: 'careers@innovationlabs.com',
    phone: '+1 (555) 987-6543',
    location: 'San Francisco, CA',
    description:
      'Innovation Labs is at the forefront of technological innovation, creating cutting-edge solutions for modern challenges.',
    website: 'https://innovationlabs.com',
    logoUrl: 'https://innovationlabs.com/logo.png',
    industry: 'Technology',
    size: '201-500 employees',
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');
  const industry = searchParams.get('industry');
  const location = searchParams.get('location');

  let filteredEmployers = [...mockEmployers];

  // Apply filters
  if (query) {
    const searchQuery = query.toLowerCase();
    filteredEmployers = filteredEmployers.filter(
      (employer) =>
        employer.companyName.toLowerCase().includes(searchQuery) ||
        employer.description.toLowerCase().includes(searchQuery)
    );
  }

  if (industry) {
    filteredEmployers = filteredEmployers.filter(
      (employer) => employer.industry === industry
    );
  }

  if (location) {
    filteredEmployers = filteredEmployers.filter(
      (employer) => employer.location === location
    );
  }

  return NextResponse.json(filteredEmployers);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // TODO: Implement employer creation logic
    // For now, just return the submitted data
    return NextResponse.json(
      { message: 'Employer profile created successfully', employer: body },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Error creating employer profile' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id } = body;
    
    // TODO: Implement employer update logic
    // For now, just return the submitted data
    return NextResponse.json(
      { message: 'Employer profile updated successfully', employer: body },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Error updating employer profile' },
      { status: 500 }
    );
  }
}

// Get employer by ID
export async function GET_EMPLOYER(
  request: Request,
  { params }: { params: { id: string } }
) {
  const employer = mockEmployers.find((e) => e.id === params.id);
  
  if (!employer) {
    return NextResponse.json(
      { message: 'Employer not found' },
      { status: 404 }
    );
  }

  return NextResponse.json(employer);
} 