export function calcAge(age: number): number {
  const now = new Date().getFullYear()

  return now - age
}
