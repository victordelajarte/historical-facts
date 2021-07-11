import { validateDate } from './date.helper';

describe('DateHelper', () => {
  it('should be defined', () => {
    expect(validateDate).toBeDefined();
  });

  it('should return false when provided empty string', () => {
    expect(validateDate('')).toEqual(false);
  });

  it('should return false when provided invalid date or bad format', () => {
    expect(validateDate('a')).toEqual(false);
    expect(validateDate('31/02/2021')).toEqual(false);
    expect(validateDate('01-01-2021')).toEqual(false);
    expect(validateDate('1-1-2021')).toEqual(false);
    expect(validateDate('2021/01/01')).toEqual(false);
  });

  it('should return false when provided future date', () => {
    expect(validateDate('01/01/2050')).toEqual(false);
  });

  it('should return true when provided valid and past date', () => {
    expect(validateDate('01/01/2020')).toEqual(true);
  });
});
