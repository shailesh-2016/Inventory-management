export default function BlockProgress({
  value = 50,
  blocks = 10,
  blockClass = "w-12 h-5",
  filledClass = "bg-[var(--color-orange)]",
  emptyClass = "bg-[var(--color-empty)]",
  gapClass = "gap-1",
  showLabel = true,
}) {
  const parseValue = (v) => {
    if (typeof v === "number") return v;
    if (typeof v === "string") {
      const cleaned = v.replace(/[^\d.-]/g, "");
      const num = parseFloat(cleaned);
      return Number.isNaN(num) ? 0 : num;
    }
    return 0;
  };

  const raw = parseValue(value);
  const clamped = Math.max(0, Math.min(100, raw));
  const filled = Math.floor((clamped / 100) * blocks);
  const filledSafe = Math.max(0, Math.min(blocks, filled));

  return (
    <div className="flex items-center gap-3">
      <div className={`flex ${gapClass}`} aria-hidden>
        {Array.from({ length: blocks }).map((_, i) => {
          const isFilled = i < filledSafe;
          const cls = `${isFilled ? filledClass : emptyClass} ${blockClass}`;
          return <span key={i} className={cls} />;
        })}
      </div>

      {showLabel && (
        <div className="w-10 text-right text-sm text-gray-700">
          {Number.isInteger(clamped) ? clamped : Number(clamped.toFixed(1))}
        </div>
      )}
    </div>
  );
}
