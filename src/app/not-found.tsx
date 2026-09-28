// 404 page — big gradient '404', message, 'Back to Home' button.
// Design shows Navbar + Footer here, so compose them directly (not-found sits outside the (main) group).
export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="mt-2 text-muted-foreground">
          Page not found.
        </p>
      </div>
    </main>
  );
}