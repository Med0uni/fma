export default function Loading() {
  return (
    <div className="container py-12">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="flex h-[400px] animate-pulse flex-col overflow-hidden rounded-lg border bg-card"
          >
            <div className="h-48 bg-muted" />
            <div className="flex-1 space-y-4 p-4">
              <div className="h-4 w-24 rounded bg-muted" />
              <div className="space-y-2">
                <div className="h-6 w-full rounded bg-muted" />
                <div className="h-6 w-2/3 rounded bg-muted" />
              </div>
              <div className="h-4 w-full rounded bg-muted" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
