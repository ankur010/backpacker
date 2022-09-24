export const compactNumber = (value: number) =>
  new Intl.NumberFormat('en-US', {
    notation: 'compact',
  }).format(value);
