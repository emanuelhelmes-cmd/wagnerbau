export default function NachrichtenLoading() {
  return (
    <div className="flex-1 p-6">
      <div className="animate-pulse space-y-4">
        <div className="h-8 w-40 bg-border/50 rounded" />
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="h-20 bg-border/30 rounded-lg" />
        ))}
      </div>
    </div>
  );
}
