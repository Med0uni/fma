import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="container flex min-h-[60vh] flex-col items-center justify-center">
      <h1 className="mb-4 text-4xl font-bold">News Section Not Found</h1>
      <p className="mb-8 text-muted-foreground">
        The news section you are looking for does not exist or has been removed.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-primary transition-colors hover:text-primary/80"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Home</span>
      </Link>
    </div>
  )
}
