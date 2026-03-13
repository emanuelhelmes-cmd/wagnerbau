export default function AdminLoading() {
  return (
    <div className="flex-1 p-6">
      <div className="animate-pulse space-y-6">
        <div className="h-8 w-48 bg-border/50 rounded" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-28 bg-border/30 rounded-lg" />
          ))}
        </div>
        <div className="h-64 bg-border/30 rounded-lg" />
      </div>
    </div>
  );
}
