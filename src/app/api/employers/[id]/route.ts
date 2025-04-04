import { NextRequest, NextResponse } from 'next/server';
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

export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const employer = mockEmployers.find(emp => emp.id === context.params.id);
  
  if (!employer) {
    return NextResponse.json(
      { message: 'Employer not found' },
      { status: 404 }
    );
  }

  return NextResponse.json(employer);
} 