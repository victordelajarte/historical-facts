import { isBefore, parse } from 'date-fns';

export function validateDate(value: string): boolean {
  if (!value) return false;
  try {
    const today = new Date();
    const date = parse(value, 'dd/MM/yyyy', today);
    return isBefore(date, today);
  } catch {
    return false;
  }
}
