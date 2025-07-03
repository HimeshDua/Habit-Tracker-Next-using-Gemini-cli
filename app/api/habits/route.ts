import {NextResponse} from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const habits = await prisma.habit.findMany({
      include: {
        completedDates: true
      }
    });
    return NextResponse.json({habits});
  } catch (error) {
    console.error('Error fetching habits:', error);
    return NextResponse.json(
      {error: 'Failed to read habits data', details: error.message},
      {status: 500}
    );
  }
}

export async function POST(request: Request) {
  const {name} = await request.json();

  if (!name) {
    return NextResponse.json({error: 'Habit name is required'}, {status: 400});
  }

  try {
    const newHabit = await prisma.habit.create({
      data: {
        name
      }
    });
    return NextResponse.json({habit: newHabit}, {status: 201});
  } catch (error) {
    console.error('Error creating habit:', error);
    return NextResponse.json({error: 'Failed to create habit'}, {status: 500});
  }
}
