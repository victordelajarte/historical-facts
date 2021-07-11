import { buildMessage, ValidateBy, ValidationOptions } from 'class-validator';
import { validateDate } from '../helpers';

export function IsProperlyFormattedDate(
  validationOptions?: ValidationOptions,
): PropertyDecorator {
  return ValidateBy(
    {
      name: 'IsProperlyFormattedDate',
      constraints: [],
      validator: {
        validate: (value): boolean => validateDate(value),
        defaultMessage: buildMessage(
          (eachPrefix: string) =>
            `${eachPrefix} must be a past date, formatted as such : 'dd/MM/yyyy'`,
          validationOptions,
        ),
      },
    },
    validationOptions,
  );
}
