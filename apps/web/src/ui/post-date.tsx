import { format, parseISO } from 'date-fns';

export default function PostDate({ dateString }: { dateString: string }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'MMMM d, yyyy')}</time>;
}
