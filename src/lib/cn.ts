/**
 * Une clases condicionales sin dependencias externas.
 * Filtra valores falsy y normaliza espacios.
 */
export function cn(...inputs: Array<string | false | null | undefined>): string {
  return inputs.filter(Boolean).join(" ").replace(/\s+/g, " ").trim();
}
