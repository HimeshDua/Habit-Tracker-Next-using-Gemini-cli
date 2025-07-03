import {NextResponse} from 'next/server';
import prisma from '@/lib/prisma';

export async function DELETE(
  request: Request,
  {params}: {params: {id: string}}
) {
  const habitId = params.id;

  try {
    await prisma.habit.delete({
      where: {id: habitId}
    });
    return NextResponse.json({message: 'Habit deleted successfully'});
  } catch (error: any) {
    if (error.code === 'P2025') {
      // Prisma error code for record not found
      return NextResponse.json({error: 'Habit not found'}, {status: 404});
    }
    console.error('Error deleting habit:', error);
    return NextResponse.json({error: 'Failed to delete habit', details: error.message}, {status: 500});
  }
}

export async function PUT(request: Request, {params}: {params: {id: string}}) {
  const habitId = params.id;
  const {name} = await request.json();

  if (!name) {
    return NextResponse.json({error: 'Habit name is required'}, {status: 400});
  }

  try {
    const updatedHabit = await prisma.habit.update({
      where: {id: habitId},
      data: {name}
    });
    return NextResponse.json({habit: updatedHabit});
  } catch (error: any) {
    if (error.code === 'P2025') {
      // Prisma error code for record not found
      return NextResponse.json({error: 'Habit not found'}, {status: 404});
    }
    console.error('Error updating habit:', error);
    return NextResponse.json({error: 'Failed to update habit', details: error.message}, {status: 500});
  }
}
