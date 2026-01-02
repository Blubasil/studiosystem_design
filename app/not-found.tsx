import Link from "next/link"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        {/* 404 Number */}
        <div className="mb-8">
          <span className="text-8xl sm:text-9xl font-bold text-foreground/10">
            404
          </span>
        </div>

        {/* Message */}
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
          Page not found
        </h1>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Back to Home */}
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  )
}
