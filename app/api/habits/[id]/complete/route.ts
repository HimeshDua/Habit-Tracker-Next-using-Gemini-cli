import {NextResponse} from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request, {params}: {params: {id: string}}) {
  const habitId = params.id;
  const {date} = await request.json();

  if (!date) {
    return NextResponse.json({error: 'Date is required'}, {status: 400});
  }

  try {
    const habit = await prisma.habit.findUnique({
      where: {id: habitId},
      include: {completedDates: true}
    });

    if (!habit) {
      return NextResponse.json({error: 'Habit not found'}, {status: 404});
    }

    const existingCompletion = habit.completedDates.find(
      (cd) => cd.date.toISOString().split('T')[0] === date
    );

    if (existingCompletion) {
      // If already completed, remove it
      await prisma.completedDate.delete({
        where: {id: existingCompletion.id}
      });
    } else {
      // If not completed, add it
      await prisma.completedDate.create({
        data: {
          date: new Date(date),
          habit: {
            connect: {id: habitId}
          }
        }
      });
    }

    // Fetch the updated habit with completed dates
    const updatedHabit = await prisma.habit.findUnique({
      where: {id: habitId},
      include: {completedDates: true}
    });

    return NextResponse.json({habit: updatedHabit});
  } catch (error) {
    console.error('Error toggling habit completion:', error);
    return NextResponse.json(
      {error: 'Failed to update habit completion'},
      {status: 500}
    );
  }
}
