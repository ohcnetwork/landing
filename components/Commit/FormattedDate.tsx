const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
  timeZone: "UTC",
});

interface FormattedDateProps extends React.ComponentPropsWithoutRef<"time"> {
  date: string | Date;
}

export function FormattedDate({ date, ...props }: FormattedDateProps) {
  const parsedDate = typeof date === "string" ? new Date(date) : date;

  return (
    <time dateTime={parsedDate.toISOString()} {...props}>
      {dateFormatter.format(parsedDate)}
    </time>
  );
}
