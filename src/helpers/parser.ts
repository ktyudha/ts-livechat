export function parseUplinkFlexible(
  message: string,
  keys: string[]
): Record<string, number> | null {
  const values = message.split(";").map(Number);

  if (values.length !== keys.length || values.some(isNaN)) {
    throw new Error("Invalid message format or key mismatch");
  }

  return keys.reduce((acc, key, index) => {
    acc[key] = values[index];
    return acc;
  }, {} as Record<string, number>);
}
