import Link from "next/link";

export function SiteHeader() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur shadow-sm">
      <div className="container mx-auto flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-primary text-xl">
          <span className="hidden sm:inline">Bindeprai2009</span>
          <span className="sm:hidden">BP</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm ml-auto font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}