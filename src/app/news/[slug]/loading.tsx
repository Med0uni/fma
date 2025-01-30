export default function Loading() {
  return (
    <div className="container py-12">
      <div className="space-y-8">
        <div className="h-8 w-48 animate-pulse rounded-lg bg-muted" />
        <div className="h-96 animate-pulse rounded-lg bg-muted" />
        <div className="space-y-4">
          <div className="h-8 w-64 animate-pulse rounded-lg bg-muted" />
          <div className="h-4 w-32 animate-pulse rounded-lg bg-muted" />
        </div>
        <div className="space-y-4">
          <div className="h-4 animate-pulse rounded-lg bg-muted" />
          <div className="h-4 animate-pulse rounded-lg bg-muted" />
          <div className="h-4 w-2/3 animate-pulse rounded-lg bg-muted" />
        </div>
      </div>
    </div>
  )
}
