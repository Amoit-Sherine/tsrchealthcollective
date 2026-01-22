export default function SkipToContent() {
  return (
    <a
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-olive focus:shadow-soft focus:ring-2 focus:ring-olive/50 focus:ring-offset-2 focus:ring-offset-white"
      href="#main-content"
    >
      Skip to content
    </a>
  );
}
