import { NextResponse } from 'next/server';
import { Candidate } from '@/types';

// Mock candidates data
const mockCandidates: Candidate[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, NY',
    skills: ['React', 'TypeScript', 'Node.js'],
    experience: [
      {
        title: 'Senior Frontend Developer',
        company: 'TechCorp Inc.',
        startDate: '2020-01',
        endDate: '2023-12',
        description: 'Led frontend development team...',
      },
    ],
    education: [
      {
        degree: 'Bachelor of Science in Computer Science',
        institution: 'University of Technology',
        graduationYear: '2019',
      },
    ],
  },
  {
    id: '2',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    phone: '+1 (555) 987-6543',
    location: 'San Francisco, CA',
    skills: ['Product Management', 'Agile', 'Data Analysis'],
    experience: [
      {
        title: 'Product Manager',
        company: 'Innovation Labs',
        startDate: '2021-03',
        description: 'Managed product development...',
      },
    ],
    education: [
      {
        degree: 'Master of Business Administration',
        institution: 'Business School',
        graduationYear: '2020',
      },
    ],
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');
  const skills = searchParams.get('skills')?.split(',');
  const location = searchParams.get('location');

  let filteredCandidates = [...mockCandidates];

  // Apply filters
  if (query) {
    const searchQuery = query.toLowerCase();
    filteredCandidates = filteredCandidates.filter(
      (candidate) =>
        `${candidate.firstName} ${candidate.lastName}`
          .toLowerCase()
          .includes(searchQuery) ||
        candidate.email.toLowerCase().includes(searchQuery)
    );
  }

  if (skills && skills.length > 0) {
    filteredCandidates = filteredCandidates.filter((candidate) =>
      skills.some((skill) =>
        candidate.skills.some((s) => s.toLowerCase() === skill.toLowerCase())
      )
    );
  }

  if (location) {
    filteredCandidates = filteredCandidates.filter(
      (candidate) => candidate.location === location
    );
  }

  return NextResponse.json(filteredCandidates);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // TODO: Implement candidate creation logic
    // For now, just return the submitted data
    return NextResponse.json(
      { message: 'Candidate profile created successfully', candidate: body },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Error creating candidate profile' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id } = body;
    
    // TODO: Implement candidate update logic
    // For now, just return the submitted data
    return NextResponse.json(
      { message: 'Candidate profile updated successfully', candidate: body },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Error updating candidate profile' },
      { status: 500 }
    );
  }
} 