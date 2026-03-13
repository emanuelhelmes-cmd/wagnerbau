export default function GalerieLoading() {
  return (
    <div className="flex-1 p-6">
      <div className="animate-pulse space-y-4">
        <div className="h-8 w-32 bg-border/50 rounded" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="aspect-square bg-border/30 rounded-lg" />
          ))}
        </div>
      </div>
    </div>
  );
}
