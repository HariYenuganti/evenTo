import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ClassValue } from 'clsx';
import prisma from './db';
import { notFound } from 'next/navigation';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export async function getEvents(city: string) {
  const events = await prisma.eventoEvent.findMany({
    where: {
      city: city === 'all' ? undefined : capitalizeFirstLetter(city),
    },
    orderBy: {
      date: 'asc',
    },
  });
  return events;
}

export async function getEvent(slug: string) {
  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug,
    },
  });
  if (!event) {
    return notFound();
  }

  return event;
}
