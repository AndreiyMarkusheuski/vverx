import isDefined from './is-defined';

export default function isDefinedNotEmpty(value) {
  return (
    (isDefined(value) && value !== '' && !Array.isArray(value)) ||
    (isDefined(value) && Array.isArray(value) && value.length > 0)
  );
}
