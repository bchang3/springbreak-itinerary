import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Example: className={cn(iconStyles, expanded ? "opacity-0" : "opacity-100")}
 * @returns merged Tailwind classes
 */
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
