import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Example: className={cn(iconStyles, expanded ? "opacity-0" : "opacity-100")}
 * @returns merged Tailwind classes
 */
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

function getOrdinal(n: number): string {
  if (n > 3 && n < 21) return "th";
  switch (n % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

export function getMonthAndWeekDay(date: Date): string {
  const weekday = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    timeZone: "UTC",
  }).format(date);

  const month = new Intl.DateTimeFormat("en-US", {
    month: "long",
    timeZone: "UTC",
  }).format(date);

  const day = date.getUTCDate();
  const ordinal = getOrdinal(day);

  return `${weekday}, ${month} ${day}${ordinal}`;
}

export function getWeekdayShort(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    timeZone: "UTC",
  }).format(date);
}

export function getTime(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: "UTC",
  }).format(date);
}
