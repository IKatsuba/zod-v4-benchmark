export function createData(length: number, fn: () => any) {
  return Array.from({ length }, fn);
}
