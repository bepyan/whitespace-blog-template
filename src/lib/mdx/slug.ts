export function slugify(str: string) {
  return encodeURIComponent(
    String(str).trim().toLowerCase().replace(/\s+/g, '-'),
  );
}
