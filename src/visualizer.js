export function toSeries(rows) {
  return rows.map((r) => ({ t: new Date(r.time), h: Number(r.height) }));
}

export function summarize(series) {
  if (!series.length) return null;
  const heights = series.map((p) => p.h);
  return {
    min: Math.min(...heights),
    max: Math.max(...heights),
    mean: heights.reduce((a, b) => a + b, 0) / heights.length,
  };
}
