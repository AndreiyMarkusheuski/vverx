export default function isDefined(value) {
  return value !== undefined && value !== null;
}

export function isDefinedArray(values) {
  for (let i = 0; i < values.length; i += 1) {
    if (!isDefined(values[i])) return false;
  }

  return true;
}
