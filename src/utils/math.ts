export function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function lerp(start: number, end: number, progress: number) {
  return start + (end - start) * clamp(progress, 0, 1);
}

export function lerpColor(from: string, to: string, progress: number): string {
  const parseChannel = (hex: string, offset: number) =>
    Number.parseInt(hex.slice(offset, offset + 2), 16);

  const red = Math.round(
    lerp(parseChannel(from, 1), parseChannel(to, 1), progress),
  );
  const green = Math.round(
    lerp(parseChannel(from, 3), parseChannel(to, 3), progress),
  );
  const blue = Math.round(
    lerp(parseChannel(from, 5), parseChannel(to, 5), progress),
  );

  return `#${red.toString(16).padStart(2, "0")}${green
    .toString(16)
    .padStart(2, "0")}${blue.toString(16).padStart(2, "0")}`;
}
