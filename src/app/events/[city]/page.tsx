import EventsList from '@/components/events-list';
import H1 from '@/components/h1';
import { Suspense } from 'react';
import Loading from './loading';
import { capitalizeFirstLetter } from '@/lib/utils';
import { z } from 'zod';

type MetadataProps = {
  params: {
    city: string;
  };
};

type EventsPageProps = MetadataProps & {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export function generateMetadata({ params }: MetadataProps) {
  const city = params.city;
  return {
    title:
      city === 'all'
        ? 'All Events'
        : `Events in ${capitalizeFirstLetter(city)}`,
  };
}

const pageNumberSchema = z.coerce.number().int().positive().optional();

export default async function EventsPage({
  params,
  searchParams,
}: EventsPageProps) {
  const city = params.city;
  const parsedPage = pageNumberSchema.safeParse(searchParams.page);
  if (!parsedPage.success) {
    throw new Error('Invalid page number');
  }

  if (!['all', 'austin', 'seattle'].includes(city)) {
    return (
      <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
        <H1 className="mb-28">{`Events in ${capitalizeFirstLetter(city)}`}</H1>
        <div className="max-w-2xl text-center">
          <p className="text-lg text-white/75">
            Currently only Austin and Seattle work, others are work in progress.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">
        {city === 'all' && 'All Events'}
        {city !== 'all' && `Events in ${capitalizeFirstLetter(city)}`}
      </H1>

      <Suspense key={city + parsedPage.data} fallback={<Loading />}>
        <EventsList city={city} page={parsedPage.data} />
      </Suspense>
    </main>
  );
}
