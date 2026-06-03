export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center">
        <h1 className="text-4xl font-serif text-primary mb-4">Page Not Found</h1>
        <p className="text-muted-foreground">The angels could not find that page.</p>
        <a href="/" className="mt-6 inline-block text-primary underline font-serif">Return to the sanctuary</a>
      </div>
    </div>
  );
}
